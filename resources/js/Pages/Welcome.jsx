import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Tagline from "@/Components/Tagline";
import Button from "@/Components/Button";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <Tagline className="text-4xl mb-12" />
                {props.auth.user ? (
                    <Link href={route("dashboard")}>
                        <Button>Dashboard</Button>
                    </Link>
                ) : (
                    <div className="flex items-center gap-x-3">
                        <Link href={route("login")}>
                            <Button className="bg-zinc-900">Log in</Button>
                        </Link>

                        <Link href={route("register")}>
                            <Button>Register</Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
