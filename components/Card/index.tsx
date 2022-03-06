import React from 'react';
import * as C from './styles';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
    id: string;
    unit_amount: number;
    product: {
        description: string;
        name: string;
        images: string[];
    }
}

type CardProps = {
    item: Product;
}

export function Card({ item }: CardProps) {
    return (
        <Link href={"/product/" + item.id}>
            <a style={{ textDecoration: "none" }}>
                <C.Card>
                    <div className="image-container">
                        <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            width={400}
                            height={400}
                            objectFit="contain"
                        />
                    </div>
                    <p title={item.product.name}>{item.product.name.slice(0, 50)}{item.product.name.length > 50 ? '...' : ''}</p>
                    <div className="flex">
                        <p>R${(item.unit_amount / 100).toFixed(2)}</p>
                        <C.Button>
                            <p>add to bag</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" /></svg>
                        </C.Button>
                    </div>
                </C.Card>
            </a>
        </Link>
    )
}
