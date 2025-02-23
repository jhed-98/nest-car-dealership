import { IsString } from 'class-validator';

// Clases
export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
