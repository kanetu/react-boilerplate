import { getUsers } from "@services/users";
import { useQuery } from "@tanstack/react-query";

const userKeys = {
  all: ["search"] as const,
  search: (filters: string) => [...userKeys.all, { filters }] as const,
};

const useUsersQuery = (filters: string) =>
  useQuery({
    queryKey: userKeys.search(filters),
    queryFn: getUsers,
    staleTime: 1000,
  });

export { useUsersQuery };
