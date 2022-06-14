import { Route, Routes } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Login from "./Login";
import Signup from "./Signup";

function ViewRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default ViewRoutes;
