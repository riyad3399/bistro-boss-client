import { Helmet } from "react-helmet-async";
import SectionTItle from "../../../components/SectionTitle/SectionTItle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    const [, cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <Helmet>
                <title>Payment - Bistro Boss</title>
            </Helmet>
            <SectionTItle subHeading='please process' heading='payment'></SectionTItle>
            <h3 className="text-3xl text-center">Teka o Teka tumi uira uira aso....</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;