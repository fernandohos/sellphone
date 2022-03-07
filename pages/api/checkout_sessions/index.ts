import Stripe from "stripe";
import { NextApiHandler } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: "2020-08-27"
});

const handler: NextApiHandler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                mode: "payment",
                cancel_url: req.headers.origin + "/cart",
                success_url: req.headers.origin + "/success?session_id={CHECKOUT_SESSION_ID}",
                payment_method_types: ["card"],
                line_items: req.body.items ?? []
            })

            res.status(200).json(session);
        }
        catch ({ message }) {
            res.status(500).json({ statusCode: 500, message });
        }
    }
    else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}

export default handler;