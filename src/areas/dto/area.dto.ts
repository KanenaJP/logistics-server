import { IsNumber, IsString } from "class-validator";


export class AreaDto {
  @IsString()
  name: string;
  @IsString()
  fullName: string;
  @IsString()
  englishName: string;
  @IsString()
  englishFullName: string;
  @IsNumber()
  isoCode: number;
  @IsNumber()
  countryCode: number;
}
