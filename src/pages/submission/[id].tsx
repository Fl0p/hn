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
      <h1>{submission?.name}</h1>
      <p>{submission?.status}</p>
      <p>{submission?.createdAt.toLocaleDateString()}</p>
      <p>{submission?.updatedAt.toLocaleDateString()}</p>
    </div>
  );
};

export default QuestionPage;
