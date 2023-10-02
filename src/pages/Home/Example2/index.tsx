import Button from "@components/Button/Button";
import React, { useEffect } from "react";

const Example2: React.FC = () => {
  useEffect(() => {
    fetch("/getUser", {
      method: "POST",
    }).then((res) => console.log(res));
  }, []);

  return (
    <div className="main">
      Hello newcommer!
      <Button title="erere"></Button>
    </div>
  );
};

export default Example2;
