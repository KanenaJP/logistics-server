import { IsNumber, IsString } from "class-validator";

export class LocalityDto {
  @IsString()
  name: string;
  @IsString()
  fullName: string;
  @IsString()
  englishName: string;
  @IsString()
  englishFullName: string;
  @IsNumber()
  areaCode: number;
  @IsNumber()
  countryCode: number;
  @IsNumber()
  level: number;
  @IsNumber()
  postalIndex: number;
  @IsNumber()
  isoCode: number;
}
