import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  //! Inyeccion de dependencia
  constructor(private readonly carsService: CarsService) {}

  //! Route

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  // Envio el parametro y uso un validation de Pipe q convert string a number
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id: id });
    return this.carsService.findOneById(id); //convierto el string id en un entero para q lea mi array
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  patch(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'Delete',
      id: id,
    };
  }
}
