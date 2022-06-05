import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TransportationOrderEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  carCount: number;
  @Column({ nullable: false })
  loadingDate: Date;
  @Column({ nullable: false })
  unloadingDate: Date;
  @Column({ nullable: false })
  status: number;
  @Column({ nullable: false })
  fromCountry: number;
  @Column({ nullable: false })
  fromArea: number;
  @Column({ nullable: false })
  fromLocality: number;
  @Column({ nullable: false })
  toCountry: number;
  @Column({ nullable: false })
  toArea: number;
  @Column({ nullable: false })
  toLocality: number;
  @Column({ nullable: false })
  weight: number;
  @Column({ nullable: false })
  volume: number;
  @Column({ nullable: false })
  rateToCarrier: number;
  @Column({ nullable: false })
  rateToYou: number;
  @Column({ nullable: false })
  company: number;
  @Column({ nullable: false })
  carrier: number;
}
