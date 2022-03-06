import React from 'react';
import { Header } from '@components/Header';
import { CardsGrid } from '@components/CardsGrid';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';

interface IPrice extends Stripe.Price {
  product: Stripe.Product;
};

type HomeProps = {
  items: IPrice[];
}

const Home = ({ items }: HomeProps) => {
  return (
    <div>
      <Header />
      <CardsGrid items={items} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: "2020-08-27"
  })

  const prices = await stripe.prices.list({
    active: true,
    limit: 15,
    expand: ['data.product']
  });

  return {
    props: {
      items: prices.data
    }
  }
}

export default Home;
