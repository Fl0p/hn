import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { type File } from "formidable";
import fs from "fs";

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
  res: NextApiResponse<UploadResponse>,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed", status: "error" });
  }

  try {
    const file: File | undefined = await new Promise((resolve, reject) => {
      const form = formidable({});
      form.parse(req, (err, _fields, files) => {
        if (err) reject(err as Error);
        const uploadedFile = files.file;
        resolve(Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile);
      });
    });

    if (!file) {
      return res
        .status(400)
        .json({ error: "No PDF uploaded", status: "error" });
    }

    // Read the PDF file
    const pdfBuffer = fs.readFileSync(file.filepath);

    // Send it to external API
    const externalRes = await fetch("https://dify.aimost.pl/api/files/upload", {
      method: "POST",
      headers: {
        "x-app-code": "L78aZH4xcFgNBJqE",
        "x-app-passport":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0MDYwMDFiNy1iOTUzLTRlY2YtYjYzNC1iYzcwZjNhN2IyZmQiLCJzdWIiOiJXZWIgQVBJIFBhc3Nwb3J0IiwiYXBwX2lkIjoiNDA2MDAxYjctYjk1My00ZWNmLWI2MzQtYmM3MGYzYTdiMmZkIiwiYXBwX2NvZGUiOiJMNzhhWkg0eGNGZ05CSnFFIiwiZW5kX3VzZXJfaWQiOiIzNTVmZGQ5Yy04ODBiLTQwNWItYmU1Ny1kYWIyOWY3YjcwZjAifQ.t0aBlG6CN6s4xQj37edyFEcH0heVI1FfYDASggw51z0",
        "x-csrf-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjUwNjQ0ODIsInN1YiI6Ijc1ODFhN2FhLTNiYzgtNDAxMS1iNGU5LTJjNDY4MDA5ZmY0NSJ9.WwYGUR4f7oMJ0DYLNGQhs0dqEOvrblcRFvz4RE4ylZM",
      },
      credentials: "include", // needed because curl used cookies
      body: pdfBuffer,
    });

    const contentType = externalRes.headers.get("content-type");
    const body = contentType?.includes("application/json")
      ? ((await externalRes.json()) as unknown)
      : await externalRes.text();
    console.log("🚀 ~ handler ~ body:", body);

    return res.status(200).json({
      status: "sent",
      forwardedResponse: JSON.stringify(body),
    });
  } catch (err) {
    console.error("Upload error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error", status: "error" });
  }
}
