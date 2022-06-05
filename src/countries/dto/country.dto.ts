import { IsNumber, IsString } from "class-validator";

export class CountryDto {
  @IsString()
  name: string;
  @IsString()
  fullName: string;
  @IsString()
  englishName: string;
  @IsString()
  englishFullName: string;
  @IsString()
  twoCharacterCode: string;
  @IsString()
  threeCharacterCode: string;
  @IsNumber()
  isoCode: number;
}
