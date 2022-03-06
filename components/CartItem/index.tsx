import React from 'react';
import * as C from './styles';
import Stripe from 'stripe';
import Image from 'next/image';
import { useShoppingCart } from '@hooks/useShoppingCart';

interface IPrice extends Stripe.Price {
    product: Stripe.Product;
    quantity: number;
}

type CartItemProps = {
    item: IPrice
}

export function CartItem({ item }: CartItemProps) {
    const {addItemToCart, removeItemFromCart} = useShoppingCart();

    function addToCart() {
        addItemToCart(item);
    }

    function removeFromCart() {
        removeItemFromCart(item.id);
    }

    return (
        <C.CartItem>
            <div className="image-container">
                <Image src={item.product.images[0]} alt={item.product.name} width={90} height={90} objectFit="contain" />
            </div>
            <div className="name-price">
                <h2>{item.product.name}</h2>
                <p>
                    {(Number(item.unit_amount) / 100).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </p>
            </div>
            <div className="quantity">
                <div onClick={removeFromCart}>-</div>
                <p>{item.quantity}</p>
                <div onClick={addToCart}>+</div>
            </div>
        </C.CartItem>
    )
}
