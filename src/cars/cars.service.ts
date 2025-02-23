import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corola',
    // },
  ];

  //! Methods

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`); // Agregamos un Exception Filters: si no encontramos el id
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
      // brand: createCarDto.brand,
      // model: createCarDto.model,
    };

    //! function para add del array
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (!updateCarDto) throw new BadRequestException('Request body is missing');

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    //! function para update del array
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOneById(id);
    //! funtion para delete del array
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
