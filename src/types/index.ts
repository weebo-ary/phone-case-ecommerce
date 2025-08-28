export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  compatibility: string[];
  features: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  shipping: number;
  tax: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}