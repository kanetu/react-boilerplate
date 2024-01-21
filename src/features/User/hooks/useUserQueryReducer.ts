import { GetUsersRequest } from "@services/users";
import { useReducer } from "react";

// Constants
const CHANGE_Q = "CHANGE_Q";
const CHANGE_PERPAGE = "CHANGE_PERPAGE";
const CHANGE_PAGE = "CHANGE_PAGE";

// Actions
const changeQAction = (value: string) => ({ type: CHANGE_Q, value });
const changePerPageAction = (value: number) => ({
  type: CHANGE_PERPAGE,
  value,
});
const changePageAction = (value: number) => ({ type: CHANGE_PAGE, value });

export const useUserQueryReducer = () =>
  useReducer(
    (state: GetUsersRequest, action: { type: string; value: any }) => {
      switch (action.type) {
        case "CHANGE_Q": {
          return {
            ...state,
            q: action.value,
          };
        }
        case "CHANGE_PERPAGE": {
          return {
            ...state,
            per_page: action.value,
          };
        }
        case "CHANGE_PAGE": {
          return {
            ...state,
            page: action.value,
          };
        }
        default: {
          return state;
        }
      }
    },
    { q: "", per_page: 100, page: 1 },
  );

export { changeQAction, changePerPageAction, changePageAction };
