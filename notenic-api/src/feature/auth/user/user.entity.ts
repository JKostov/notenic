import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Expose()
  @Column({
    length: 255,
  })
  firstName: string;

  @Expose()
  @Column({
    length: 255,
  })
  lastName: string;

  @Expose()
  @Column({
    unique: true,
    length: 255,
  })
  username: string;

  @Expose()
  @Column({
    unique: true,
    length: 255,
  })
  email: string;

  @Expose()
  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
