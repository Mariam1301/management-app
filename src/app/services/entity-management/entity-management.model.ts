export interface Ingredient {
  id: number;
  title: string;
  type: EntityTypeEnum;
  measurement_type: MeasurementTypeEnum;
  measurement_amount: number;
}

export interface Dish extends Ingredient {
  price: number;
}

export interface EntityAddModel extends Ingredient {
  price?: number;
}

export enum EntityTypeEnum {
  Ingredient = 'ingredient',
  Dish = 'dish',
}

export enum MeasurementTypeEnum {
  Unit = 'unit',
  Kg = 'kg',
}

export const MeasurementTypes = [
  {
    name: 'კგ',
    id: 'kg',
  },
  {
    name: 'ცალი',
    id: 'unit',
  },
];
