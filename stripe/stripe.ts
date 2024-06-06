import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
})

export const charge = async (amount: number, source: string) => {
  try {
    const payment = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
    })

    return payment
  } catch (error) {
    throw error
  }
}
