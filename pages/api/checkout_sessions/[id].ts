import { NextApiHandler } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2020-08-27"
});

const handler: NextApiHandler = async (req, res) => {
    let { query: { id } } = req;

    try {
        if (typeof id !== 'string') {
            id = id[0];
        }

        if (!id.startsWith('cs_')) {
            throw Error("Incorrect Checkout Session ID");
        }
        const checkout_session = await stripe.checkout.sessions.retrieve(id);
        res.status(200).json(checkout_session);
    }
    catch ({ message }) {
        res.status(500).json({ statusCode: 500, message });
    }
}

export default handler;