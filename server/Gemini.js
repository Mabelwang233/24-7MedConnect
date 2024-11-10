import dotenv from "dotenv";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

dotenv.config();


async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

const apiKey = process.env.GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
model: "gemini-1.5-flash",
});

const generationConfig = {
temperature: 1,
topP: 0.95,
topK: 64,
maxOutputTokens: 8192,
responseMimeType: "text/plain",
};

export async function run(prompt) {
const chatSession = model.startChat({
    generationConfig,
// safetySettings: Adjust safety settings
// See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
});

const result = await chatSession.sendMessage(prompt);
return result.response.text();
};