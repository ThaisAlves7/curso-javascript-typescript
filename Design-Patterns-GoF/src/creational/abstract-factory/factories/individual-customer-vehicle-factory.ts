import { VehicleProtocol } from './../vehicle/vehicles-protocol';
import { Customer } from '../customer/customers';
import { IndividualCar } from './../vehicle/individual-car';
import { IndividualCustomer } from '../customer/individual-customers';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
