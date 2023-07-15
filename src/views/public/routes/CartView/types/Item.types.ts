export interface Item {
  id: string;
  price: number;
  quantity?: number;
  itemTotal?: number;
  [key: string]: any;
}

export interface InitialState {
  id: string;
  items: Item[];
  isEmpty: boolean;
  totalItems: number;
  totalUniqueItems: number;
  cartTotal: number;
  metadata?: Metadata;
}

export interface Metadata {
  [key: string]: any;
}