import { IsNumber, IsString } from "class-validator";

export class StatusDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
