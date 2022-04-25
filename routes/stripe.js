const express = require("express");
const router = express.Router();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51KrMkXIQ6ubFWesuzMm6pLasYll6ZNobU5kDiImHWs14BZd3p68d7k9MLbsxmoHf2L3hgZwScwO5XEB9wE01K4D700upiGtGmV');

const calculateOrderAmount = (amount) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;