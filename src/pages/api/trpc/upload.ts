import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import {env} from "~/env";

export const config = {
  api: {
    bodyParser: false, // Required for formidable
  },
};

interface UploadResponse {
  status: string;
  forwardedResponse?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed", status: "error" });
  }

  try {
    const file: File | undefined = await new Promise((resolve, reject) => {
      const form = formidable({});
      form.parse(req, (err, _fields, files) => {
        if (err) reject(err);
        const uploadedFile = files.file;
        resolve(Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile);
      });
    });

    if (!file) {
      return res.status(400).json({ error: "No PDF uploaded", status: "error" });
    }

    // Read the PDF file
    const pdfBuffer = fs.readFileSync(file.filepath);

    // Send it to external API
    const externalRes = await fetch(env.DIFY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/pdf",
      },
      body: pdfBuffer,
    });

    const responseText = await externalRes.text();

    return res.status(200).json({
      status: "sent",
      forwardedResponse: responseText,
    });
  } catch (err) {
    console.error("Upload error:", err);
    return res.status(500).json({ error: "Internal server error", status: "error" });
  }
}
