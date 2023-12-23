/*
   name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
*/

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import Category from './Category';

@Entity('cars')
class Car {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public brand: string;

  @Column()
  public daily_rate: number;

  @Column()
  public description: string;

  @Column()
  public fine_amount: number;

  @Column()
  public available: boolean;

  @Column()
  public license_plate: string;

  @Column()
  public category_id: string;

  @ManyToOne(() => Category) // muitos carros para uma categoria
  @JoinColumn({ name: 'category_id' })
  public category: Category;

  @CreateDateColumn()
  public created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}

export { Car };
