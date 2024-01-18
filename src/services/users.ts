import githubInstance from "@libs/axios";

const userEndPoints = {
  query: "/search/users",
} as const;

const getUsers = async () => {
  const response = await githubInstance.get(userEndPoints.query);
  return response.data;
};

export { getUsers };
