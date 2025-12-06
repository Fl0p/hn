type Props = {
  name: string;
  className?: string;
  section: string;
};

export const SpriteHolder = ({ name = "", className, section = "" }: Props) => {
  return (
    <svg className={className}>
      <use xlinkHref={`/sprites/${section}.svg#${name}`} />
    </svg>
  );
};
