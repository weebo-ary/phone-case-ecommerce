import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction = 
  | { type: 'ADD_TO_CART'; product: Product; selectedColor: string }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => 
        item.product.id === action.product.id && 
        item.selectedColor === action.selectedColor
      );
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === action.product.id && item.selectedColor === action.selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      } else {
        const newItems = [...state.items, { product: action.product, quantity: 1, selectedColor: action.selectedColor }];
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      }
    }
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.product.id !== action.productId);
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', productId: action.productId });
      }
      const updatedItems = state.items.map(item =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }
    case 'CLEAR_CART': {
      return { items: [], total: 0 };
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};