// const key="AIzaSyBD8aoUvRXEPab22efce8QwXuUBtIIeb5A"


// k=AIzaSyAzVDzOnvl5HLFhdhGJiHydzQQiEwXhxV4

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import{
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = "AIzaSyAzVDzOnvl5HLFhdhGJiHydzQQiEwXhxV4";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  
  const generationConfig = {
    temperature: 0.5,
  topP: 1,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",

  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
   history: [
    {
      role: "user",
      parts: [
        {text: "What is your boss name?\nMy boss name is Cutie"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "I am a chatbot assistant, and do not have a boss."},
      ],
    },
    {
      role: "user",
      parts: [
        {text: "Hiii\nhi\nhii\nWhat's up?\nHello, how have you been?\nHello \nHi, how are you doing?\nWhat's new?\nYo\nNamaskara\ngreetings\nhow are you doing?\nHey there!\nGood day!\nHow's it going?\nHowdy!\nWelcome!\nNice to see you!\nWhat's going on?\nWhat's happening?\nHiya!\nHello, friend!\nGreetings!\nHow are things?\nWhat's up?\nGood to see you!\nHow have you been?\nHow are you today?\nLong time!\nHi, what's new?\nWhat's good?\nHow's everything?\n\n\nfor the above kind of sentence or words you should reply \"Hii,my name is Festo.How can I help you?\""},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "Hi, my name is Festo. How can I help you?"},
      ],
    },
    {
      role: "user",
      parts: [
        {text: "Hi"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "Hi, my name is Festo. How can I help you?"},
      ],
    },
    {
      role: "user",
      parts: [
        {text: "What is your boss name?\nfor the above kind of sentence or words you should reply \"My boss name is Cutie\""},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "My boss's name is Cutie."},
      ],
    },
  ],
});


  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;