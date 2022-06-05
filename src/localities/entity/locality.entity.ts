import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class LocalityEntity {
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  fullName: string;
  @Column({ nullable: false })
  englishName: string;
  @Column({ nullable: false })
  englishFullName: string;
  @PrimaryColumn()
  areaCode: number;
  @PrimaryColumn()
  countryCode: number;
  @Column({ nullable: false })
  level: number;
  @Column({ nullable: false })
  postalIndex: number;
  @PrimaryColumn()
  isoCode: number;
}
