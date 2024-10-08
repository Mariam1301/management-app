import { EntityModel } from '../entity-management/entity-management.model';

export interface ProductionPageFilter {
  keyword: string;
  start_date: string;
  end_date: string;
}

export interface Production {
  amount: number;
  date: string | Date;
  entity_id: number;
  entity: EntityModel;
  id: number;
}

export interface ProductionCreateModel {
  entity_id: number;
  amount: number;
  date?: string;
}
