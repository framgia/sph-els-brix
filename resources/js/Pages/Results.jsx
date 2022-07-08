import { Head } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/Authenticated";

const Results = ({ auth, errors }) => {
	return (
		<Authenticated auth={auth} errors={errors}>
			<Head title="Results" />

			<div className="py-6">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 bg-white border-b border-gray-200 flex flex-col">
							<h1>Results</h1>
						</div>
					</div>
				</div>
			</div>
		</Authenticated>
	);
};

export default Results;
