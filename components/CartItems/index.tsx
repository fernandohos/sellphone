import React from 'react';
import { useShoppingCart } from '@hooks/useShoppingCart';
import { CartItem } from '@components/CartItem';
import * as C from './styles';

export function CartItems() {
    const { cartItems } = useShoppingCart();

    return (
        <C.CartItems>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </C.CartItems>
    )
}
