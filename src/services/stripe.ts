import Stripe from 'stripe';

export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2024-04-10',
    });
  }

  public async charge(amount: number, source: string): Promise<Stripe.Response<Stripe.Charge>> {
    try {
      const payment = await this.stripe.charges.create({
        amount,
        currency: 'usd',
        source,
      });

      return payment;
    } catch (error) {
      throw error;
    }
  }
}
