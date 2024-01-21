interface CardItemProps {
  avatarUrl: string;
  login: string;
  type: string;
  score: number;
}
const CardItem: React.FC<CardItemProps> = ({
  avatarUrl,
  login,
  type,
  score,
}) => {
  return (
    <div tw="border border-solid border-blue-100 rounded-md p-1 m-2 flex">
      <div tw="flex flex-col">
        <img tw="rounded-md w-20 h-20" alt={login} src={avatarUrl} />
      </div>

      <div tw="flex flex-col px-2 w-44">
        <span tw="text-2xl truncate">{login}</span>
        <span tw="text-base italic">Type: {type}</span>
        <span tw="text-base italic">Score: {score}</span>
      </div>
    </div>
  );
};

export default CardItem;
