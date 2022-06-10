import { BrowserRouter } from "react-router-dom";

import ViewRoutes from "./ViewRoutes";

function View() {
    return (
        <BrowserRouter>
            <ViewRoutes />
        </BrowserRouter>
    );
}

export default View;
