import React from 'react';
import * as C from './styles';
import logo from '@images/logo.svg';
import darkLogo from '@images/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link'
import { useShoppingCart } from '@hooks/useShoppingCart';

export function Header() {
    const { cartItems } = useShoppingCart();

    function isUserDarkTheme() {
        if (typeof window === 'undefined') return;
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    return (
        <C.Header>
            <Link href="/" passHref>
                <a>
                    <Image src={isUserDarkTheme() ? darkLogo : logo}
                        alt="Sell Phone logo"
                        width={200}
                        height={50}
                    />
                </a>
            </Link>
            <Link href="/cart" passHref>
                <a>
                    <C.BagIcon bagLength={cartItems.length}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" /></svg>
                    </C.BagIcon>
                </a>
            </Link>
        </C.Header>
    )
}
