import type { NextRequest } from "next/server";
import Stripe from "stripe";
import { product } from "@/lib/site";
import { getStripe } from "@/lib/stripe";

const SIZES = new Set(["S", "M", "L"]);

function baseUrl(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  if (configured) return configured;
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  if (host) return `${proto}://${host}`;
  return "http://localhost:3000";
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const size =
    typeof body === "object" &&
    body !== null &&
    "size" in body &&
    typeof (body as { size: unknown }).size === "string"
      ? (body as { size: string }).size.toUpperCase()
      : "";

  if (!SIZES.has(size)) {
    return Response.json({ error: "Choose a valid size (S, M, or L)." }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const origin = baseUrl(request);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: product.checkoutCurrency,
            unit_amount: product.priceAmountUsdCents,
            product_data: {
              name: `${product.name} — Size ${size}`,
              description: "Made to order. Size and fulfillment details are confirmed after purchase.",
            },
          },
        },
      ],
      metadata: {
        size,
        product_name: product.name,
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart?size=${encodeURIComponent(size)}`,
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return Response.json({ error: "Could not start checkout." }, { status: 500 });
    }

    return Response.json({ url: session.url });
  } catch (e) {
    console.error("checkout error:", e);

    const isDev = process.env.NODE_ENV === "development";

    if (e instanceof Stripe.errors.StripeError) {
      const status =
        typeof e.statusCode === "number" &&
        e.statusCode >= 400 &&
        e.statusCode < 600
          ? e.statusCode
          : 503;
      return Response.json(
        {
          error: isDev
            ? e.message
            : "Payment service is unavailable. Try again shortly.",
          ...(isDev && e.code ? { stripeCode: e.code } : {}),
        },
        { status }
      );
    }

    if (e instanceof Error) {
      const isConfig =
        e.message.includes("STRIPE_SECRET_KEY") ||
        e.message.includes("publishable key");
      return Response.json(
        {
          error: isDev
            ? e.message
            : isConfig
              ? "Checkout is not configured."
              : "Payment service is unavailable. Try again shortly.",
        },
        { status: isConfig ? 500 : 503 }
      );
    }

    return Response.json(
      { error: "Payment service is unavailable. Try again shortly." },
      { status: 503 }
    );
  }
}
