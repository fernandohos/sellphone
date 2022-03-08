import React from 'react';
import Image from 'next/image';
import * as C from './styles';
import { useRouter } from 'next/router';

type MessageProps = {
    message: string;
    image: string;
}

export function Message({ message, image }: MessageProps) {
    const router = useRouter();
    return (
        <C.Message>
            <Image src={image} alt={message} width={100} height={100} objectFit="contain" />
            <h1>{message}</h1>
            <button onClick={() => router.push("/")}>Go home</button>
        </C.Message>
    )
}
