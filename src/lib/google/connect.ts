import "server-only";

import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { google } from "googleapis";

function connectGoogle() {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly", // 구글 시트
        "https://www.googleapis.com/auth/drive.readonly", // 구글 드라이브
      ],
    });

    return serviceAccountAuth;
  } catch (error) {
    console.error("Error connecting to Google API:", error);
    throw new Error("Error connecting to Google API");
  }
}

export async function getGoogleSheet() {
  try {
    const auth = connectGoogle();
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error("Error accessing Google Sheet:", error);
    return null;
  }
}

export async function getGoogleDrive() {
  try {
    const auth = connectGoogle();
    const drive = google.drive({ version: "v3", auth });
    return drive;
  } catch (error) {
    console.error("Error accessing Google Drive:", error);
    return null;
  }
}
