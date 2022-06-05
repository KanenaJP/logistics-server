import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CountryEntity {
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  fullName: string;
  @Column({ nullable: false })
  englishName: string;
  @Column({ nullable: false })
  englishFullName: string;
  @Column({ nullable: false })
  twoCharacterCode: string;
  @Column({ nullable: false })
  threeCharacterCode: string;
  @PrimaryColumn()
  isoCode: number;
}
