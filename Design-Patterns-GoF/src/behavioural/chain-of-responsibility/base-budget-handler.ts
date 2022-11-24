import { CustomerBudget } from './customer-budget';

export abstract class BaseBudgetHandler {
  protected nextHandle: BaseBudgetHandler | null = null;

  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandle = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandle) return this.nextHandle.handle(budget);

    return budget;
  }
}
