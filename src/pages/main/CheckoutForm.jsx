import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CheckoutForm = ({bioId}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuthInfo();
  const [transId, setTransId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { money: 5 }).then((res) => {
      // console.log(res.data);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const {mutate} = useMutation({
    mutationKey: ['payments'],
    mutationFn: async (data) => await axiosSecure.post('/payments', data).then(res => res.data),
    onSuccess: (data) => {
      // console.log(data)
      if(data.insertedId) {
        toast.success('Payment Successful!')
      }
    },
    onError: (err) => {
      toast.error(err.message)
    }
    
    
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error from stripe", error);
      setErr(error.message);
    } else {
      // console.log("from stripe", paymentMethod);
      setErr("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("stripe confirm error", confirmError);
    } else {
      // console.log(paymentIntent, 'paymentIntent')
      if (paymentIntent.status === 'succeeded') {
        setTransId(paymentIntent.id);

        const payment = {
          bioId: parseInt(bioId),
          amount: 5,
          transactionId: paymentIntent.id,
          status: 'pending',
          email: user?.email
        }

        mutate(payment)
      }
    }
  };

  console.log(transId);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <CardElement
        className="border border-primary p-2 rounded-md w-full"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="primaryBtn px-6 py-1 rounded-md mt-6 w-fit"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      <p className="text-red-600">{err}</p>
    </form>
  );
};

export default CheckoutForm;
