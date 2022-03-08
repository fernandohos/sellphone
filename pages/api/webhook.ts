import { NextApiHandler } from "next";
import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: "2020-08-27"
});

export const config = {
    api: {
        bodyParser: false
    }
}

const handler: NextApiHandler = (req, res) => {
    if (req.method === 'POST') {
        let event;

        try {
            const rawBody = buffer(req);
            const signature = req.headers['stripe-signature'] ?? '';

            event = stripe.webhooks.constructEvent(
                rawBody.toString(),
                signature,
                process.env.STRIPE_WEBHOOK_SECRET ?? ''
            )
        }
        catch ({ message }) {
            console.log(`❌ Error Message: ${message}`);
            res.status(400).send(`Webhook error: ${message}`);
            return;
        }
        
        console.log(`✔ Success: ${event.id}`);

        if(event.type === 'checkout.session.completed') {
            console.log(`💰 Payment received!`);
            // business logic goes here
        }
        else {
            console.warn(`🤷‍♀️ Unhadled event type ${event.type}`);
        }
        
        
        
    }
    else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method not Allowed");
    }
}

export default handler;