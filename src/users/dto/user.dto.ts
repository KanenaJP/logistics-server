import { IsDate, IsNumber, IsString } from "class-validator";

export class UserDto {
  @IsNumber()
  id: number;
  @IsString()
  type: string;
  @IsString()
  login: string;
  @IsString()
  password: string;
  @IsDate()
  lastLogin?: Date;
  @IsNumber()
  companyEmployee?: string;
}
