import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./Pagos.css"
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe("pk_test_51KPGz8KYhnA59xmV9FH6tByh1O7aa0yPfciw52e426NZRkdRc1GvYwWmn1o7y0KqamPpNFsSdDBrgft5BZWYamsD00MFrt7dt7");

export default function Pagos() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

 
  console.log(clientSecret);
  return (
    <div className="Pagos">
      
        <Elements  stripe={stripePromise}>  
           <CheckoutForm />
        </Elements>
    
     
          
    </div>
  );
}