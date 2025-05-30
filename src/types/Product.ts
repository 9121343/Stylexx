export interface Product {
  id: string;
  name: string;
  description?: string;  // make optional if not always present
  price: number;
  quantity: number;
  image: string;
}
