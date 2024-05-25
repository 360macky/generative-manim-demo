import OpenAI from "openai";
import {
    OpenAIStream,
    StreamingTextResponse,
    experimental_StreamData,
} from "ai";
// import { customFunctions } from "./customFunctions";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generalSystemPrompt = `
You are an assistant that knows about Manim. Manim is a mathematical animation engine that is used to create videos programmatically.
You are working for Animo. Animo is the ultimate software to build animations with Manim powered by AI. Made for creators, teachers, and students.

The following is an example of the code:
\`\`\`
from manim import *
from math import *

class GenScene(Scene):
    def construct(self):
        c = Circle(color=BLUE)
        self.play(Create(c))

\`\`\`

# Rules
1. Always use GenScene as the class name, otherwise, the code will not work.
2. Always use self.play() to play the animation, otherwise, the code will not work.
3. Do not response with a code block, otherwise, the code will not work.
4. Do not add text, only output the code.
`;

export const runtime = "edge";

export async function POST(req: Request) {
    const body = await req.json();
    const { messages, prompt } = body;

    // Add a new object at the beginning of the messages array
    messages.unshift({
        role: "system",
        content: generalSystemPrompt,
    });

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
        model: "ft:gpt-3.5-turbo-1106:astronware:generative-manim-2:9OeVevto",
        messages,
        // functions: customFunctions
    });

    // Convert the response into a friendly text-stream
    // const data = new experimental_StreamData();
    const code = response.choices[0].message.content;
    // Respond with the stream
    return new Response(code);
}
