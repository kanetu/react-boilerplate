import React, { useEffect } from "react";
import "App.scss";
import Button from "@components/Button/Button";
import tw from "twin.macro";

const Input = tw.input`border hover:border-blue-50 p-5 m-4`;

const App: React.FC = () => {
  useEffect(() => {
    fetch("/getUser", {
      method: "POST",
    }).then((res) => console.log(res));
  }, []);

  return (
    <div className="main">
      <Button>Hello newcommer!</Button>
      <Input></Input>
    </div>
  );
};

export default App;
