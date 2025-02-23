import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  //! Inyeccion de dependencia
  constructor(private readonly carsService: CarsService) {}

  //! Route

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // Validation de Pipe q convert string a number. (ParseIntPipe) Nota: aplica cuando id => Mysql
  // Validation de Pipe q convert string a string. (ParseUUIDPipe) Nota: aplica cuando id => PostgreSql
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id: id });
    return this.carsService.findOneById(id); //convierto el string id en un entero para q lea mi array
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
