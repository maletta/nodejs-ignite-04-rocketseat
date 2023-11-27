/*
   name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
*/

import { Column, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import Category from './Category';

class Car {
  @PrimaryColumn()
  public id?: string;

  @Column()
  public name: string;

  @Column()
  public brand: string;

  @Column()
  public category_id: string;

  @Column()
  public daily_rate: number;

  @Column()
  public description: string;

  @Column()
  public fine_amount: number;

  @Column()
  public license_plate: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  public category: Category;
}

export { Car };
