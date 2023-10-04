import { previewDebug, render } from "@test-utils";
import UserInfoForm from "./UserInfoForm";

describe("first-test", () => {
  it("test3", () => {
    expect(1).toBe(1);
    const { getByText } = render(<UserInfoForm />);
    previewDebug();
    expect(getByText("Age")).toBeInTheDocument();
  });
});
