/*About this file: This is the server side of OpenAI section of Munir-GPT
Node.js is used to run the server
Express.js is used to define routes, handle HTTP requests, and set up middleware for parsing request bodies and enabling CORS.
*/

require("dotenv").config({ path: "./.env.gpt" });
const cors = require("cors");
const OpenAI = require("openai");
const express = require("express");
const { response } = require("express");
const bodyParser = require("body-parser");

//Passing my API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express(); //Create an Express.js application(Node.js framework)
app.use(bodyParser.json()); //Parse JSON request bodies (middleware function)
app.use(cors()); //Enable CORS for cross-origin requests (middleware function)
const port = 3001;

//POST route for handling OpenAI requests
app.post("/openAI", async (req, res) => {
  const { message } = req.body; //Extract the "message" field from the POST request body

  //Used the OpenAI client to generate a completion based on the user's message
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `${message}`,
    max_tokens: 200,
    temperature: 0.5, //This controls the randomness of the response (0.5 is a moderate level)
  });

  //   console.log(completion);
  //Responds to the client side with the generated AI response
  res.json({
    message: completion.choices[0].text,
  });
});

//For testing: starts the Express.js server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
