import { IsDate, IsNumber, IsString } from "class-validator"

export class TransportationOrderDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsNumber()
  carCount: number;
  @IsDate()
  loadingDate: Date;
  @IsDate()
  unloadingDate: Date;
  @IsNumber()
  status: number;
  @IsNumber()
  fromCountry: number;
  @IsNumber()
  fromArea: number;
  @IsNumber()
  fromLocality: number;
  @IsNumber()
  toCountry: number;
  @IsNumber()
  toArea: number;
  @IsNumber()
  toLocality: number;
  @IsNumber()
  weight: number;
  @IsNumber()
  volume: number;
  @IsNumber()
  rateToCarrier: number;
  @IsNumber()
  rateToYou: number;
  @IsNumber()
  company: number;
  @IsNumber()
  carrier: number;
}
