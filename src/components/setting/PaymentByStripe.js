import React from "react";
import StripeChekout from "react-stripe-checkout";

const PaymentByStripe = () => {
    const handleToken = (token)=>{
        console.log(token);
    }
  return (
    <div>
      <StripeChekout stripeKey="pk_test_51KwlUKFw2qMNC4dzcgAJ1cmPCwB6NJeTLh0deeiN3bxEug3VEgG159IHFyxGIGxFWjAIuHQDeaPqjIbbKu1N16nu00VxA3BVW1"
      token={handleToken}
      >
          
          </StripeChekout>
    </div>
  );
};

export default PaymentByStripe;
