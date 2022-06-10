import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

function ViewRoutes() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    );
}

export default ViewRoutes;
