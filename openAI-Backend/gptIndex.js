//   apiKey: "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",
//   apiKey: process.env.OPENAI_API_KEY,

const OpenAI = require("openai");
const express = require("express");
const { response } = require("express");

const openai = new OpenAI({
  apiKey: "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",
});

const app = express();
const port = 3080;

app.post("/", async (req, res) => {
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(completion);
  res.json({
    data: completion,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
