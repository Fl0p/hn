import Head from "next/head";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";

export default function TestDify() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<string>("");

  const { mutate: triggerFlow, isPending: isLoading } =
    api.dify.triggerFlow.useMutation({
      onSuccess: (data) => {
        if (data.success) {
          setResponse(JSON.stringify(data.data, null, 2));
        } else {
          setResponse(`Error: ${data.error}`);
        }
      },
      onError: (error) => {
        setResponse(`Error: ${error.message}`);
      },
    });

  const handleTrigger = () => {
    setResponse("");
    triggerFlow({ message, user: "test-user" });
  };

  return (
    <>
      <Head>
        <title>Test Dify Flow</title>
        <meta name="description" content="Test Dify integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-[3rem]">
            Test <span className="text-purple-600">Dify</span> Flow
          </h1>

          <div className="w-full max-w-2xl space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black"
              >
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message..."
                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-black placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                rows={4}
              />
            </div>

            <Button
              onClick={handleTrigger}
              disabled={!message.trim() || isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "Loading..." : "Trigger Dify Flow"}
            </Button>

            {response && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">
                  Response:
                </label>
                <pre className="w-full overflow-auto rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-black">
                  {response}
                </pre>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
