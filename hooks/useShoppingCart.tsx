import React, { useState, createContext, useContext, ReactNode } from 'react';
import Stripe from 'stripe';

type ShoppingCartProviderProps = {
    children: ReactNode;
}

interface ItemToAdd extends Stripe.Price {
    product: Stripe.Product;
}

interface CartItem extends ItemToAdd {
    quantity: number;
}

type ShoppingCartContext = {
    addItemToCart: (itemToAdd: ItemToAdd) => CartItem | undefined;
    removeItemFromCart: (id: string) => void;
    cartItems: CartItem[];
}

const shoppingCartContext = createContext({} as ShoppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addItemToCart(itemToAdd: ItemToAdd) {
        if (cartItems.some(cartItem => cartItem.id === itemToAdd.id)) {
            const newCartItems = cartItems.map((cartItem, i) => {
                itemToAdd.id === cartItem.id ? cartItem.quantity += 1 : null
                return cartItem;
            })
            setCartItems(newCartItems);
        }
        else {
            setCartItems(p => [...p, { ...itemToAdd, quantity: 1 }]);
        }
        return cartItems.find(item => itemToAdd.id === item.id);
    }

    function removeItemFromCart(id: string) {
        const newCartItems = cartItems.filter(item => {
            if (item.id === id) {
                item.quantity--;
            }
            return item.quantity >= 1;
        });
        setCartItems(newCartItems);
    }

    return (
        <shoppingCartContext.Provider value={{ addItemToCart, removeItemFromCart, cartItems }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export const useShoppingCart = () => useContext(shoppingCartContext);