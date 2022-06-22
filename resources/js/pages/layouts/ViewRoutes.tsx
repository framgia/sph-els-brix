import { Route, Routes } from "react-router-dom";

import Dashboard from "../dashboard";
import Follows from "../follows";
import Lessons from "../lessons";
import Login from "../login";
import Profile from "../profile";
import ProfileRoute from "../profile/ProfileRoute";
import Signup from "../signup";
import Layout from "./Layout";

const ViewRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/follows" element={<Follows />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":id" />
        </Route>
      </Route>
    </Routes>
  );
};

export default ViewRoutes;
