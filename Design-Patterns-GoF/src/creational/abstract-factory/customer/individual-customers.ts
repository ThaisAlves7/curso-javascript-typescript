import { Customer } from './customers';

export class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (INDIVIDUAL)';
  }
}
