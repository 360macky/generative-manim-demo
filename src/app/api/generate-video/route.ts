import rateLimit from "@/utils/rate-limit";
import { NextResponse } from "next/server";

// 32 requests per hour
const REQUESTS_PER_INTERVAL = 32;
const INTERVAL = 60 * 1000 * 60;
const limiter = rateLimit({ interval: INTERVAL });

export async function POST(req: Request) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json(
      { detail: "Code is required." },
      { status: 400 }
    );
  }

  const randomIteration = Math.floor(Math.random() * 1000);

  const body = {
    code,
    file_name: "GenScene.py",
    file_class: "DefaultClass",
    user_id: "GenScene",
    project_name: "GenScene",
    iteration: randomIteration.toString(),
    aspect_ratio: "16:9"
  };

  const { isLimitExceeded, responseHeaders } = limiter.check(
    REQUESTS_PER_INTERVAL
  );

  if (isLimitExceeded) {
    return NextResponse.json(
      {
        detail: `Rate limit exceeded. Please try again later in 1 hour.`,
      },
      { status: 429, headers: responseHeaders }
    );
  }

  const response = await fetch(`${process.env.AZURE_SERVER}/code-to-video`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
