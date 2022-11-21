import { Customer } from '../customer/customers';
import { VehicleProtocol } from '../vehicle/vehicles-protocol';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(name: string, customerName: string): VehicleProtocol;
}
