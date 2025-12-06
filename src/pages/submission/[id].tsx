import { type GetStaticPropsContext, type InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import { prefetchHelper } from "~/utils/prefetchHelper";

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
  const { data: submission } = api.post.getPostById.useQuery({
    id,
  });

  const formatDate = (date?: Date | null) => {
    if (!date) return "—";
    try {
      return date.toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "—";
    }
  };

  const documentSections: {
    title: string;
    description: string;
    documents: { id: string; url: string }[];
  }[] = [
    {
      title: "Pierwotny PDF",
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
  console.log("🚀 ~ QuestionPage ~ documentSections:", documentSections);

  return (
    <div className="m-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="link" asChild>
          <Link href="/">Powrót</Link>
        </Button>
        <Button variant="outline">Przedłuż</Button>
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
        </dl>
      </section>

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
                        href={"http://localhost:3033/" + document.url}
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
  );
};

export default QuestionPage;
