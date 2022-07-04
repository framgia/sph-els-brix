import React, { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/Authenticated";
import UserOverview from "@/Components/UserOverview";

export default function Dashboard(props) {
	useEffect(() => {
		console.log(props);
	}, []);
	return (
		<Authenticated auth={props.auth} errors={props.errors}>
			<Head title="Dashboard" />

			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 bg-white border-b border-gray-200 flex">
							<UserOverview
								firstname={props.auth.user.firstname}
								lastname={props.auth.user.lastname}
							/>
						</div>
					</div>
				</div>
			</div>
		</Authenticated>
	);
}
