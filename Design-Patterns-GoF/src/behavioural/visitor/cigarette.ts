import { TaxVisitorProtocol } from './tax-visitor-protocolo';
import { VisitableProduct } from './visitable-products';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
