import { GetUsersRequest, getUsers } from "@services/users";
import { useQuery } from "@tanstack/react-query";

const userKeys = {
  all: ["search"] as const,
  search: (query: GetUsersRequest) => [...userKeys.all, { query }] as const,
};

const useUsersQuery = (query: GetUsersRequest) => {
  const isLongEnough = query.q.length >= 3;
  return useQuery({
    queryKey: userKeys.search(query),
    queryFn: () => getUsers(query),
    staleTime: 5000,
    enabled: isLongEnough,
  });
};

export { userKeys, useUsersQuery };
