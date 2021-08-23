const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe =require("stripe") ("sk_test_51JCvUUSJcG6kJ10ihrAb0UgrfqXDaK5Q4i0Idjac0yCtPz9bPo1jh4Vosn4R9pJXGVqwDbFlsv7ge1ARDqNTpJ8600d8RpObUh")
                                 //"sk_test_51JCvUUSJcG6kJ10ihrAb0UgrfqXDaK5Q4i0Idjac0yCtPz9bPo1jh4Vosn4R9pJXGVqwDbFlsv7ge1ARDqNTpJ8600d8RpObUh"
//API

//-App config
const app = express();

//-Middleware  
app.use(cors({origin:true}));
app.use(express.json());


//-API route 
app.get("/", (request, response) => response.status(200).send
("hello world")
)
app.post("/paymnets/create", async (request, resopnse) => {
    const total = request.query.taotal;

    console.log("Payment Recieved Boom!!! for this amount>>>", total );
    
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency:"usd",
    });


    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
});

//-Listen command
exports.api = functions.https.onRequest(app)
//http://localhost:5001/clone-a66ca/us-central1/api 


