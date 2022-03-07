import React from 'react';
import { CheckoutButton } from '@components/CheckoutButton';
import { Header } from '@components/Header';
import { CartItems } from '@components/CartItems';
import * as C from '@styles/cart';
import { useShoppingCart } from '@hooks/useShoppingCart';
import { EmptyCart } from '@components/EmptyCart';

export default function Cart() {
    const { cartItems } = useShoppingCart();
    return (
        <>
            <Header />
            <C.Cart>
                {
                    cartItems.length ?
                        <>
                            <CartItems />
                            <CheckoutButton />
                        </>
                        :
                        <EmptyCart />
                }
            </C.Cart>
        </>
    )
}
