import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeCounterpartyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
}
