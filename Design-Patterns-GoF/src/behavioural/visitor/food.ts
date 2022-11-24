import { TaxVisitorProtocol } from './tax-visitor-protocolo';
import { VisitableProduct } from './visitable-products';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
