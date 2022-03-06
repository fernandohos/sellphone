import React from 'react';
import * as C from './styles';
import { Card } from '@components/Card';

type Product = {
    id: string;
    unit_amount: number;
    product: {
        description: string;
        name: string;
        images: string[];
    }
}

type CardsGridProps = {
    items: Product[];
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
