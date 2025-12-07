import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";
import { UploadImage } from "~/components/upload-pdf";
import { api } from "~/utils/api";
import Link from "next/link";

export default function NewCase() {
  const router = useRouter();
  const queryClient = api.useUtils();
  const { mutate, isPending: isCreating } = api.post.create.useMutation({
    onSuccess: async (data) => {
      void (await queryClient.post.getAll.invalidate());
      setFiles([]);
      // Redirect to submission page after creation
      void router.push(`/submission/${data.id}`);
    },
  });
  const [files, setFiles] = useState<File[]>([]);

  async function sendPdf(file: File) {
    const formData = new FormData();
    formData.append("file", file);

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
      body: formData,
    });

    const body = (await externalRes.json()) as unknown as {
      name: string;
      id: string;
      source_url: string;
    };

    mutate({
      name: body.id,
      initialPdfUrl: body.source_url,
    });
    return body;
  }

  return (
    <>
      <Head>
        <title>Dodaj sprawę</title>
        <meta name="description" content="Dodaj nową sprawę" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-4xl font-bold text-white">Dodaj nową sprawę</h1>

          <div className="flex w-full justify-center">
            <UploadImage
              title={"Upload PDF"}
              files={files}
              setFiles={setFiles}
              maxFileNumber={1}
            />
          </div>

          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/">Anuluj</Link>
            </Button>
            <Button
              disabled={!files.length || isCreating}
              variant="default"
              onClick={() => sendPdf(files[0]!)}
            >
              {isCreating ? "Tworzenie sprawy..." : "Utwórz sprawę"}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
