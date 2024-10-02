export interface Sale {
  created_at: Date | string;
  date: Date | string;
  id: number;
  title: string;
  updated_at: Date | string;
}

export interface SaleRecord {
  id: number;
  entity_id: number;
  amount: number;
  price: number;
  accounting_id?: number;
}

export interface AddSaleInterface {}
