import React from "react";

import appLogo from "@/Images/app-logo.png";

export default function ApplicationLogo({ className }) {
    return <img src={appLogo} alt="application logo" className={className} />;
}
