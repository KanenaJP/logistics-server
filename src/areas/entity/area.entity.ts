import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AreaEntity {
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  fullName: string;
  @Column({ nullable: false })
  englishName: string;
  @Column({ nullable: false })
  englishFullName: string;
  @PrimaryColumn()
  isoCode: number;
  @PrimaryColumn()
  countryCode: number;
}
