import { Customer } from '../customer/customers';
import { EnterpriseCar } from './../vehicle/enterprise-car';
import { EnterpriseCustomer } from '../customer/enterprise-customers';
import { VehicleProtocol } from '../vehicle/vehicles-protocol';

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
