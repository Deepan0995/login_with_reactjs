import React from "react";
import LoginForm from "./components/loginform";
import Dashboard from "./components/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
