import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { feedback, code, video_url, timestamp, prompt } = await req.json();

    if (!feedback || !code || !video_url || !timestamp || !prompt) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Log the feedback data (this is where you would handle the data, e.g., save to a database)
    console.log({
      feedback,
      code,
      video_url,
      timestamp,
      prompt,
    });

    return new NextResponse("Feedback recorded successfully", { status: 200 });
  } catch (error) {
    console.error("Error recording feedback:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}