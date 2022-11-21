import { randomNumbers } from '../utils/random-numbers';
import { BicycleFactory } from './../factories/bicycle-factory';
import { CarFactory } from './../factories/car-factory';
import { Vehicle } from './../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');

  const bicycle1 = bicycleFactory.getVehicle('Monarca');
  const bicycle2 = bicycleFactory.getVehicle('AXXIS');

  const cars = [car1, car2, bicycle1, bicycle2];

  return cars[randomNumbers(cars.length)];
}
