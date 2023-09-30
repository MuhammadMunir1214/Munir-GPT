//   apiKey: process.env.OPENAI_API_KEY,

const OpenAI = require("openai");
const express = require("express");
const { response } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const openai = new OpenAI({
  apiKey: "",
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

app.post("/openAI", async (req, res) => {
  const { message } = req.body;
  console.log(message);
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  console.log(completion);
  res.json({
    message: completion.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
