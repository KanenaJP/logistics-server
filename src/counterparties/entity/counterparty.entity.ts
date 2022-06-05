import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CounterpartyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  fullName: string;
  @Column({ nullable: false })
  englishName: string;
  @Column({ nullable: false })
  englishFullName: string;
  @Column({ nullable: false })
  type: string;
}
