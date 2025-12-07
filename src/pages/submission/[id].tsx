import { SubmissionStatus } from "generated/prisma";
import { type GetStaticPropsContext, type InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/utils";
import { api } from "~/utils/api";
import { formatDate } from "~/utils/format-date";
import { prefetchHelper } from "~/utils/prefetchHelper";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "lucide-react";

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  if (typeof id !== "string") return { notFound: true };
  const post = await prefetchHelper.post.getPostById.fetch({ id });
  if (!post) return { notFound: true };

  return {
    props: {
      id,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

const QuestionPage = ({ id }: Props) => {
  const router = useRouter();
  const queryClient = api.useUtils();
  const { data: submission, isPending: isLoading } =
    api.post.getPostById.useQuery({ id });
  const { mutate: analyze, isPending: isAnalyze } =
    api.post.analyze.useMutation({
      onSuccess: async () => {
        void (await queryClient.post.getAll.invalidate());
        void (await queryClient.post.getPostById.invalidate({ id }));
      },
    });
  const { mutate, isPending: isProlongating } = api.post.prolongate.useMutation(
    {
      onSuccess: async () => {
        void (await queryClient.post.getAll.invalidate());
        void (await queryClient.post.getPostById.invalidate({ id }));
      },
    },
  );
  const { mutate: makeDecision, isPending: isDecisionMaking } =
    api.post.makeDecision.useMutation({
      onSuccess: async () => {
        void (await queryClient.post.getAll.invalidate());
        void (await queryClient.post.getPostById.invalidate({ id }));
      },
    });

  const handleAnalyze = () => {
    if (!submission) return;
    analyze({ id, name: submission.name ?? "" });
  };

  const handleProlongate = () => {
    if (!submission) return;
    mutate({ id, name: submission.name ?? "" });
  };

  const handleMakeDecision = () => {
    if (!submission) return;
    makeDecision({ id, name: submission.name ?? "" });
  };

  const documentSections: {
    title: string;
    description: string;
    documents: { id: string; url: string }[];
  }[] = [
    {
      title: "Odwołanie",
      description: "Oryginalny dokument zgłoszeniowy",
      documents: submission?.initialPdf ? [submission.initialPdf] : [],
    },
    {
      title: "PDF-y korespondencji",
      description: "Dokumenty komunikacji ze stronami",
      documents: submission?.conversationPdf ?? [],
    },
    {
      title: "PDF-y przedłużeń",
      description: "Dokumenty dotyczące prolongat",
      documents: submission?.prolongationPdf ?? [],
    },
    {
      title: "PDF-y decyzji",
      description: "Ostateczne rozstrzygnięcia",
      documents: submission?.decisionPdf ?? [],
    },
  ];

  const initDate = new Date(submission?.initDate ?? "2000-01-01");
  const deadline = new Date(initDate);

  // add 30 days
  deadline.setDate(deadline.getDate() + 30);

  return (
    <>
      <header className="body-lg-bold relative flex items-center justify-between gap-4 p-4">
        <Link href="/">Hacknation 2025</Link>
        {isLoading || isAnalyze || isProlongating || isDecisionMaking ? (
          <PacmanLoader size={12} className="absolute right-12 -bottom-8" />
        ) : null}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className={cn({ hidden: router.asPath === "/case/new" })}
          >
            Dodaj sprawę
          </Button>
          <Button size="sm">Archiwum</Button>
          <Button size="sm">Ustawienia</Button>
        </div>
      </header>
      <div className="m-10 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button variant="link" asChild>
            <Link href="/">
              <ArrowLeftIcon className="mr-2 size-4" /> Powrót
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleAnalyze}
              disabled={isAnalyze}
            >
              {isAnalyze ? "Analizowanie..." : "Analizuj"}
            </Button>
            <Button
              variant="outline"
              onClick={handleProlongate}
              disabled={isProlongating || !submission?.name}
            >
              {isProlongating ? "Przedłużanie..." : "Przedłuż"}
            </Button>
            <Button
              variant="outline"
              onClick={handleMakeDecision}
              disabled={isDecisionMaking || !submission?.name}
            >
              {isDecisionMaking
                ? "Podejmowanie decyzji..."
                : "Podejmij decyzję"}
            </Button>
          </div>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold text-slate-900">
              {submission?.name ?? "Szczegóły zgłoszenia"}
            </h1>
            {submission?.status ? (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
                {submission.status}
              </span>
            ) : null}
          </div>
          <dl className="mt-6 grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
            <div className="space-y-1">
              <dt className="text-xs tracking-wide text-slate-500 uppercase">
                Dodano w systemie
              </dt>
              <dd className="text-base font-medium text-slate-900">
                {formatDate(submission?.createdAt ?? null)}
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs tracking-wide text-slate-500 uppercase">
                Ostatnia aktualizacja
              </dt>
              <dd className="text-base font-medium text-slate-900">
                {formatDate(submission?.updatedAt ?? null)}
              </dd>
            </div>
            <div
              className={cn("space-y-1", {
                hidden: submission?.status === SubmissionStatus.INITIALIZED,
              })}
            >
              <dt className="text-xs tracking-wide text-slate-500 uppercase">
                Numar sprawy
              </dt>
              <dd className="text-base font-medium text-slate-900">
                {submission?.caseNumber ?? null}
              </dd>
            </div>
            <div
              className={cn("space-y-1", {
                hidden: submission?.status === SubmissionStatus.INITIALIZED,
              })}
            >
              <dt className="text-xs tracking-wide text-slate-500 uppercase">
                Strona sprawy
              </dt>
              <dd className="text-base font-medium text-slate-900">
                {submission?.partyType ?? null}
              </dd>
            </div>
            <div
              className={cn("space-y-1", {
                hidden: submission?.status === SubmissionStatus.INITIALIZED,
              })}
            >
              <dt className="text-xs tracking-wide text-slate-500 uppercase">
                Data zgłoszenia
              </dt>
              <dd className="text-base font-medium text-slate-900">
                {formatDate(initDate)}
              </dd>
            </div>
            <div
              className={cn("space-y-1", {
                hidden: submission?.status === SubmissionStatus.INITIALIZED,
              })}
            >
              <dt className="text-xs tracking-wide text-slate-500 uppercase">
                Termin odpowiedzi
              </dt>
              <dd
                className={cn("text text-base font-medium text-[#009900]", {
                  "text-[#ff0000]": deadline.getTime() < new Date().getTime(),
                })}
              >
                {formatDate(deadline)}
              </dd>
            </div>
          </dl>
        </section>
        {/* //MOCk */}
        {submission?.caseNumber === "KP-TP-III.5222.7.16.2022.EL" &&
        submission?.status !== SubmissionStatus.INITIALIZED ? (
          <div>
            <div className="space-y-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  Analiza sprawy
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-22">
                    <div>
                      <h4 className="mb-2 text-sm font-medium tracking-wide text-slate-700 uppercase">
                        Fakty
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#009900]"></span>
                          <span>
                            Ogłoszenia:{" "}
                            <span className="font-medium text-green-700">
                              TAK
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#009900]"></span>
                          <span>
                            Wyjazdy zagraniczne:{" "}
                            <span className="font-medium text-green-700">
                              TAK
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#009900]"></span>
                          <span>
                            Pobieranie opłat:{" "}
                            <span className="font-medium text-green-700">
                              TAK
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#009900]"></span>
                          <span>
                            Grupy z opiekunami:{" "}
                            <span className="font-medium text-green-700">
                              TAK
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#009900]"></span>
                          <span>
                            Brak wpisu:{" "}
                            <span className="font-medium text-red-700">
                              TAK
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium tracking-wide text-slate-700 uppercase">
                        Przepisy
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#009900]"></span>
                          <span>
                            Art. 4 pkt 2 UUPT:{" "}
                            <span className="font-medium text-green-700">
                              SPEŁNIONE
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#009900]"></span>
                          <span>
                            Art. 30 ust. 1–8:{" "}
                            <span className="font-medium text-red-700">
                              NARUSZONE
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="mb-2 text-sm font-medium tracking-wide text-slate-700 uppercase">
                      Zalecenie
                    </h4>
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-3">
                      <p className="text-sm text-amber-800">
                        <span className="font-medium">
                          Działalność organizatora turystyki bez wpisu
                        </span>
                        <span className="mx-2">→</span>
                        <span className="font-semibold">3 lata zakazu</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Case Assessment */}
        {submission?.status !== SubmissionStatus.INITIALIZED ? (
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Ocena sprawy
            </h2>
            {submission?.caseNumber === "KP-TP-III.5222.7.16.2022.EL" ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <p className="text-sm text-green-800">
                    Sprawa jednoznaczna – materiał dowodowy kompletny, możliwe
                    automatyczne wydanie decyzji.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </span>
                  <p className="text-sm text-amber-800">
                    Sprawa niejednoznaczna – braki w ustaleniach faktycznych,
                    konieczna analiza i decyzja człowieka.
                  </p>
                </div>
              </div>
            )}
          </section>
        ) : null}

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Dokumenty</h2>
            <p className="text-sm text-slate-500">
              Wszystkie pliki powiązane z tym zgłoszeniem są pogrupowane według
              celu.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {documentSections.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-medium text-slate-900">
                      {section.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {section.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                    {section.documents.length}{" "}
                    {section.documents.length === 1 ? "plik" : "pliki"}
                  </span>
                </div>
                {section.documents.length ? (
                  <ul className="mt-4 space-y-2 text-sm">
                    {section.documents.map((document) => (
                      <li
                        key={document.id}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 wrap-break-word"
                      >
                        <a
                          href={document.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-900 underline decoration-slate-400 underline-offset-2 hover:text-slate-600"
                        >
                          {document.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm text-slate-500">
                    Brak dodanych dokumentów.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default QuestionPage;
