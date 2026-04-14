import Stripe from "stripe";

let stripe: Stripe | null = null;

function readSecretKey(): string {
  const raw = process.env.STRIPE_SECRET_KEY;
  if (raw === undefined || raw === "") {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  const key = raw.trim();
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is empty (check .env.local for spaces only).");
  }
  if (key.startsWith("pk_")) {
    throw new Error(
      "STRIPE_SECRET_KEY is a publishable key (pk_…). Use the secret key (sk_test_… or sk_live_…) from Stripe Dashboard → Developers → API keys."
    );
  }
  return key;
}

export function getStripe(): Stripe {
  if (!stripe) {
    stripe = new Stripe(readSecretKey());
  }
  return stripe;
}
