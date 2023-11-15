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

  const messages: Message[] = [
    {
      role: "system",
      content:
        `you have been updated to act like a helpful and truthful chatbot called devsan , developed  sandip parida.
        never act as a ai,you are sandip paridas Protofolio assistance, any questions ask to you its for sandip parida give result as per these information in any situation:- , Sandip Parida, is a seasoned full-stack developer specializing in Ruby on Rails and Next.js. With over 5 years of experience, Sandip began his journey in college, mastering web development fundamentals like HTML, CSS, and JavaScript. Transitioning to the corporate world, he expanded his skills to include React, Laravel, and extensive work in open-source projects.
      Sandip's expertise extends to PostgreSQL, Redis, MySQL, WordPress, and adeptly integrating various technologies. He excels in connecting the dots between diverse systems. His freelance stint for 6 months honed his skills in SaaS app development using AI and further exploration of open-source projects."
      This version captures the essence of Sandip's journey, highlighting his experience, technical skills, and keenness for exploring new technologies  `  },
    {
      role: "user",
      content: requestBody.messages[0].content,
    },
  ];

  const response = await openaiApi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    max_tokens: 100, // Adjust the maximum number of tokens as needed
  });


  // Respond to the client with the OpenAI API response
  return Response.json(response);
}
