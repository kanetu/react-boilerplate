import React, { useEffect } from "react";
import "App.scss";
import tw from "twin.macro";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Profile from "@features/Profile";

const Input = tw.input`border hover:border-blue-50 p-5 m-4`;

const App: React.FC = () => {
  useEffect(() => {
    fetch("/getUser", {
      method: "POST",
    }).then((res) => console.log(res));
  }, []);

  console.log(Input);

  return (
    <div className="main">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<AuthRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

const AuthRoute: React.FC = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
