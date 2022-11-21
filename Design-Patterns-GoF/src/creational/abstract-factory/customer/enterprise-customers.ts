import { Customer } from './customers';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)';
  }
}
