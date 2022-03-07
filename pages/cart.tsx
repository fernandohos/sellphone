import React from 'react';
import { CheckoutButton } from '@components/CheckoutButton';
import { Header } from '@components/Header';
import { CartItems } from '@components/CartItems';
import * as C from '@styles/cart';

export default function Cart() {
    return (
        <>
            <Header />
            <C.Cart>
                <CartItems />
                <CheckoutButton />
            </C.Cart>
        </>
    )
}
