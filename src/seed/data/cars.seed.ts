import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: ' Toyota',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: ' Toyota 1',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: ' Toyota 2',
    model: 'Civic',
  },
];
