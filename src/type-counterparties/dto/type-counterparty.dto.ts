import { IsNumber, IsString } from "class-validator";

export class TypeCounterpartyDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
