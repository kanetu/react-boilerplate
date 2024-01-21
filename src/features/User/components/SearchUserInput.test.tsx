import { previewDebug, render } from "@test-utils";
import SearchUserInput from "./SearchUserInput";

describe("<UserInfoForm />", () => {
  it("<UserInfoForm /> should be rendered properly", () => {
    const { getByText } = render(
      <SearchUserInput currentQuery={{ q: "" }} dispatch={() => {}} />,
    );
    previewDebug();
    expect(getByText("Age")).toBeInTheDocument();
  });
});
