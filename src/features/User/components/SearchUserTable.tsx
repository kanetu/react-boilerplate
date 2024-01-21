import { GetUsersResponse } from "@services/users";
import CardItem from "./CardItem";
import Loading from "@components/Icons/Loading";
import "twin.macro";
export interface UserItem {
  id: number;
  avatar_url: string;
  score: number;
  login: string;
  type: string;
}

interface SearchUserTableProps {
  data?: GetUsersResponse;
  error: unknown;
  isLoading: boolean;
}
const SearchUserTable: React.FC<SearchUserTableProps> = ({
  data,
  error,
  isLoading,
}) => {
  if (error) {
    return <p tw="text-center text-lg">Ack! Something went wrong!</p>;
  }
  if (isLoading) {
    return (
      <p tw="text-center">
        <Loading tw="h-10 w-10" />
      </p>
    );
  }

  return (
    <ul tw="grid grid-cols-4 p-0 mx-auto mt-6 w-[80%]">
      {data?.items?.map((item) => (
        <li tw="list-none" key={item.id}>
          <CardItem
            avatarUrl={item.avatar_url}
            login={item.login}
            type={item.type}
            score={item.score}
          />
        </li>
      ))}
    </ul>
  );
};

export default SearchUserTable;
