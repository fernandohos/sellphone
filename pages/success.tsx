import React from 'react';
import error from '@images/error.svg';
import check from '@images/check.svg';
import { Message } from '@components/Message';
import { GetServerSideProps } from 'next';

type SuccessProps = {
    message: string;
}

export default function Success({ message }: SuccessProps) {
    return (
        <div style={{ display: "grid", placeItems: "center", height: "100vh", color: "#fff" }}>
            <Message message={message} image={message === 'Sorry, something went wrong' ? error : check} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { query: { session_id }, req: { headers: { host } } } = ctx;

    const response = await fetch(`http://${host}/api/checkout_sessions/${session_id}`).then(r => r.json());

    return {
        props: {
            message: response.message ?
                'Sorry, something went wrong' : `Thank you ${response.customer.name} for your order, check your inbox for the receipt`
        }
    }
}