import { IsNumber, IsString } from "class-validator";

export class CounterpartyDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsString()
  fullName: string;
  @IsString()
  englishName: string;
  @IsString()
  englishFullName: string;
  @IsString()
  type: string;
}
