export interface EntityModel {
  id: number;
  title: string;
  type: EntityTypeEnum;
  measurement_type: MeasurementTypeEnum;
  measurement_amount: number;
  price?: number;
}

export interface IngredientRecord {
  id: number;
  measurement_type: MeasurementTypeEnum;
  measurement_amount: number;
}

export interface Dish extends EntityModel {
  ingredients?: IngredientRecord[];
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
