import { NextRequest } from 'next/server';
import OpenAI from 'openai'; // Import OpenAI

// Create an instance of the OpenAIApi class with type declarations
const openaiApi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
interface Message {
  role: "system" | "user";
  content: string;
}
export async function POST(req: NextRequest) {
  const bodyText = await req.text();
  const requestBody: { messages: Message[] } = JSON.parse(bodyText);
  console.log("Request Message:", requestBody);
 
  const messages: Message[] = [
    {
      role: "system",
      content:
        "You are speaking with Devsan, a seasoned software professional with 2 years of experience. Devsan's real name is Sandip Parida, and he is an Indian full-stack developer. Feel free to ask Devsan anything related to software development or inquire about his portfolio project.",
    },
    {
      role: "user",
      content: requestBody.messages[0].content,
    },
  ];

  const response = await openaiApi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    max_tokens: 50, // Adjust the maximum number of tokens as needed
  });

  console.log("Request Message:", requestBody.messages[0].content);
  console.log("OpenAI Response:", response);

  // Respond to the client with the OpenAI API response
  return Response.json(response);
}
