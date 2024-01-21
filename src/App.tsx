import User from "@features/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "App.scss";
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<AuthRoute />}>
              <Route path="/" element={<User />} />
            </Route>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

const AuthRoute: React.FC = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
