import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StatusEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
}
