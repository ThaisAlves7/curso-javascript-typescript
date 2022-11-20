import { Rice, Beans, Meat, Beverage, Dessert } from './meals';
import { MealBox } from './meal-box';
import { MealBuilderProtocol } from './../interfaces/meal-builder-protocol';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);

    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Coca-Cola', 7);

    this._meal.add(beverage);
    return this;
  }

  makeDesert(): this {
    const dessert = new Dessert('Pavê Prestigio', 10);

    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
