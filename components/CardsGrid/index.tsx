import React from 'react';
import * as C from './styles';
import { Card } from '@components/Card';
import Stripe from 'stripe';

interface IPrice extends Stripe.Price {
    product: Stripe.Product;
};

type CardsGridProps = {
    items: IPrice[];
}

export function CardsGrid({ items }: CardsGridProps) {
    return (
        <C.CardsGrid>
            {
                items.map(item => (<Card key={item.id} item={item} />))
            }
            {
                items.map(item => (<Card key={item.id} item={item} />))
            }
        </C.CardsGrid>
    )
}
