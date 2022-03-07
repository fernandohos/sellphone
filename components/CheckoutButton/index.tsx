import React from 'react'
import * as C from './styles';
import { useShoppingCart } from '@hooks/useShoppingCart';
import { loadStripe } from '@stripe/stripe-js';

export function CheckoutButton() {
    const { cartItems } = useShoppingCart();

    async function goToCheckout() {
        const { id } = await fetch('/api/checkout_sessions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: cartItems.map(item => ({ price: item.id, quantity: item.quantity }))
            })
        }).then(res => res.json());

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? '');
        await stripe?.redirectToCheckout({ sessionId: id });
    }

    return (
        <C.CheckoutButton onClick={goToCheckout}>
            <p>go to checkout</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" /></svg>
        </C.CheckoutButton>
    )
}
