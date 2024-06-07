import { Request, Response } from 'express';
import { StripeService } from '../services/stripe';

export class StripeController {
  private stripeService: StripeService;

  constructor() {
    this.stripeService = new StripeService();
  }

  public async charge(req: Request, res: Response): Promise<void> {
    try {
      const { amount, source } = req.body;
      if (!amount || !source) {
        res.status(400).json({ error: 'Amount and source are required.' });
        return;
      }

      const payment = await this.stripeService.charge(amount, source);
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
