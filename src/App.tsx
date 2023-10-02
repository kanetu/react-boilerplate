import React, { useEffect } from "react";
import "App.scss";
import Button from "@components/Button/Button";

const App: React.FC = () => {
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

export default App;
