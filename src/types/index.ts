export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  cpu: string;
  ram: string;
  storage: string;
  display: string;
  gpu: string;
  weight: string;
  battery: string;
  os: string;
}

export interface Comparison {
  ids: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
}
