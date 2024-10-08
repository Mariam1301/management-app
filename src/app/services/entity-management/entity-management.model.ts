export interface EntityModel {
  id: number;
  title: string;
  type: EntityTypeEnum;
  measurement_type: MeasurementTypeEnum;
  measurement_amount: number;
  stock_amount: number;
  price?: number;
}

export interface IngredientRecord {
  id: number;
  measurement_type: MeasurementTypeEnum;
  measurement_amount: number;
  stock_status?: EntityStockStatusEnum;
}

export interface Dish extends EntityModel {
  ingredients?: IngredientRecord[];
  ingredients_cost: number;
  status: EntityStockStatusEnum;
}

export interface EntityFilterModel {
  keyword: string;
}

export enum EntityTypeEnum {
  Ingredient = 'ingredient',
  Dish = 'dish',
}

export enum MeasurementTypeEnum {
  Unit = 'unit',
  Kg = 'kg',
}

export enum EntityStockStatusEnum {
  Negative = 'negative',
  Positive = 'positive',
  zero = 'zero',
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
