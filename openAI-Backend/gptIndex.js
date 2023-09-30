//   apiKey: process.env.OPENAI_API_KEY,

const OpenAI = require("openai");
const express = require("express");
const { response } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const openai = new OpenAI({
  apiKey: "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",
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3001;

app.post("/openAI", async (req, res) => {
  const { message } = req.body;
  console.log(message);
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `${message}`,
    max_tokens: 1000,
    temperature: 0.5,
  });
  console.log(completion);
  res.json({
    message: completion.choices[0].text,
  });
});

// app.get("/openAI/models", async (req, res) => {
//   const response = await openai.models.list();

//   for await (const model of response) {
//     console.log(model);
//   }
//   res.json({
//     models: response.data.data,
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
