import SearchUserInput from "./components/SearchUserInput";
import { useUsersQuery } from "./queries";
import SearchUserTable from "./components/SearchUserTable";
import { useUserQueryReducer } from "./hooks/useUserQueryReducer";

const User = () => {
  const [query, dispatch] = useUserQueryReducer();

  const { data, error, isLoading } = useUsersQuery(query);

  return (
    <div>
      <h3 tw="text-6xl text-center">Github Search User</h3>
      <SearchUserInput currentQuery={query} dispatch={dispatch} />
      <SearchUserTable data={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default User;
