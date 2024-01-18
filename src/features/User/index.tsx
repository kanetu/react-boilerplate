import UserInfoForm from "./components/UserInfoForm";
import { useUsersQuery } from "./queries";

const User = () => {
  const { data, status, isFetching, isLoading } = useUsersQuery("kane");

  console.log(
    `isFetching: ${isFetching} | isLoading: ${isLoading} | status: ${status}`,
  );
  console.log(`----${JSON.stringify(data)}`);

  return (
    <div>
      <UserInfoForm></UserInfoForm>
    </div>
  );
};

export default User;
