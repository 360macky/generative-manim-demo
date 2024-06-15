import { google } from "googleapis";
import { JWT } from "google-auth-library";

const privateKey = process.env.SPREADSHEET_PRIVATE_KEY?.replace(/\\n/g, '\n');

const authClient = new JWT({
  email: process.env.SPREADSHEET_EMAIL,
  key: privateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth: authClient });
const spreadsheetId = "1F1nch7fCcHuDKf1hk6lWJ_-W3w6uNasZ1wRBVBPu5sc";
const sheetName = "Sheet1";

export async function POST(req: Request) {
  try {
    const { feedback, code, video_url, timestamp, prompt, model } = await req.json();

    if (!feedback || !code || !video_url || !timestamp || !prompt || !model) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Append the feedback data to the Google Spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`, // Adjust the range to cover the columns A to E
      valueInputOption: "RAW",
      requestBody: {
        values: [[timestamp, prompt, code, video_url, model, feedback]],
      },
    });

    return new Response("Feedback recorded successfully", { status: 200 });
  } catch (error) {
    console.error("Error recording feedback:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}