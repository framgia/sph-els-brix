import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

const Lessons = (props) => {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Lessons" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1>Categories</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Lessons;
