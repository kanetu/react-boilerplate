import { UserItem } from "@features/User/components/SearchUserTable";
import githubInstance from "@libs/axios";
import { queryStringBuilder } from "@utils/queryStringBuilder";

const userEndPoints = {
  query: "/search/users?{query}",
} as const;

export interface GetUsersRequest {
  q: string;
  sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
  order?: "desc" | "asc";
  per_page?: number;
  page?: number;
}
export interface GetUsersResponse {
  items: UserItem[];
  incomplete_results: boolean;
  total_count: number;
}

const getUsers = async (query: GetUsersRequest): Promise<GetUsersResponse> => {
  const queryEncoded = queryStringBuilder({ ...query });
  const response = await githubInstance.get(
    userEndPoints.query.replace("{query}", queryEncoded.toString()),
  );
  return response.data;
};

export { getUsers };
