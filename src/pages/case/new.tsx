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

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = (await res.json()) as {
      initDate: string;
      caseNumber: string;
      partyType: string;
      pdfUrl: string;
    };
    console.log(data);
    mutate({
      name: file.name + Date.now().toString(),
      initDate: data.initDate ?? "2000-01-01",
      caseNumber: data.caseNumber ? data.caseNumber : "1234567890",
      partyType: data.partyType ? data.partyType : "private",
      initialPdfUrl: data.pdfUrl
        ? data.pdfUrl
        : file.name + Date.now().toString(),
    });
    return data;
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
