import React, { ChangeEvent, Dispatch, useRef } from "react";
import { debounce } from "@utils/debounce";
import { useQueryClient } from "@tanstack/react-query";
import { userKeys } from "../queries";
import { GetUsersRequest } from "@services/users";
import { changeQAction } from "../hooks/useUserQueryReducer";

interface SearchUserInputProps {
  currentQuery: GetUsersRequest;
  dispatch: Dispatch<{ type: string; value: any }>;
}
const SearchUserInput: React.FC<SearchUserInputProps> = ({
  currentQuery,
  dispatch,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQAction(event.target.value));
  };
  const showClear = !!(inputRef.current?.value || "");
  const handleSubmit = () => {
    dispatch(changeQAction(inputRef.current!.value));
    queryClient.invalidateQueries({
      queryKey: userKeys.search({
        ...currentQuery,
        q: inputRef.current!.value,
      }),
    });
  };

  const handleClickClear = () => {
    dispatch(changeQAction(""));
    inputRef.current!.value = "";
  };

  return (
    <div tw="flex relative justify-center">
      <div className="group" tw="relative">
        <input
          tw="h-8 px-2 w-96 mr-2 rounded"
          name="name"
          ref={inputRef}
          onChange={debounce(handleChangeName, 400)}
        />
        {showClear && (
          <button
            tw="absolute invisible group-hover:visible right-4 top-2.5 cursor-pointer hover:text-white hover:bg-gray-400 border-none bg-gray-100 rounded"
            onClick={handleClickClear}
          >
            X
          </button>
        )}
      </div>
      <button
        tw="bg-transparent rounded relative cursor-pointer"
        onClick={debounce(handleSubmit, 500)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchUserInput;
