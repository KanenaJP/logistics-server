import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  type: string;
  @Column({ nullable: false })
  login: string;
  @Column({ nullable: false })
  password: string;
  @Column({ nullable: true })
  lastLogin: Date;
  @Column({ nullable: true })
  companyEmployee?: string;
}
