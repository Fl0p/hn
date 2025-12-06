import { type GetStaticPropsContext, type InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  if (typeof id !== "string") return { notFound: true };

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

  return (
    <div>
      <Button variant="link" asChild>
        <Link href="/">Back</Link>
      </Button>
      <h1>Name: {submission?.name}</h1>
      <p>Status: {submission?.status}</p>
      <p>Added to app:{submission?.createdAt.toLocaleDateString()}</p>
      <p>Last updated: {submission?.updatedAt.toLocaleDateString()}</p>
      <p>Initial PDF url: {submission?.initialPdf?.url}</p>
      <div>
        Conversation PDF urls:{" "}
        {submission?.conversationPdf?.map((pdf) => (
          <p key={pdf.id}>{pdf.url}</p>
        ))}
      </div>
      <div>
        Prolongation PDF urls:{" "}
        {submission?.prolongationPdf?.map((pdf) => (
          <p key={pdf.id}>{pdf.url}</p>
        ))}
      </div>
      <div>
        Decision PDF urls:{" "}
        {submission?.decisionPdf?.map((pdf) => (
          <p key={pdf.id}>{pdf.url}</p>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
