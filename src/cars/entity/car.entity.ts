import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  vin: string;
  @Column({ nullable: false })
  model: string;
  @Column({ nullable: false })
  brand: string;
  @Column({ nullable: false })
  loadCapacity: number;
  @Column({ nullable: false })
  owner: number;
}
