import { IsNumber, IsString } from "class-validator";

export class CarDto {
  @IsNumber()
  id: number;
  @IsString()
  vin: string;
  @IsString()
  model: string;
  @IsString()
  brand: string;
  @IsNumber()
  loadCapacity: number;
  @IsNumber()
  owner: number;
}
