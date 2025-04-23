import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const openAiClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [{ role: "user", content: "write a haiku about ai" }],
// });

// completion.then((result) => console.log(result.choices[0].message));
