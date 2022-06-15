import { Route, Routes } from "react-router-dom";

import Dashboard from "../dashboard";
import Follows from "../follows";
import Lessons from "../lessons";
import Login from "../login";
import Signup from "../signup";
import Layout from "./Layout";

function ViewRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/follows" element={<Follows />} />
        <Route path="/lessons" element={<Lessons />} />
      </Route>
    </Routes>
  );
}

export default ViewRoutes;
