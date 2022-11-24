import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { AlcoholicDrink } from './alcoholic';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { USTaxVisitor } from './us-tax-visitor copy';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];

const total = cart.reduce((sum, item) => sum + item.getPrice(), 0);

// Taxas Brasil
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(brazilTaxVisitor),
  0,
);

// Taxas USA
const totalWithTaxesUS = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(usTaxVisitor),
  0,
);
console.log('Total: ', total);
console.log('Total com Taxas Brasil: ', totalWithTaxesBrazil);
console.log('Total com Taxas USA: ', totalWithTaxesUS);
