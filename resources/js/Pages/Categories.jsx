import Authenticated from "@/Layouts/Authenticated";
import CategoryCard from "@/Components/CategoryCard";

import { Head } from "@inertiajs/inertia-react";
import React, { Fragment } from "react";

const Categories = (props) => {
	return (
		<Authenticated auth={props.auth} errors={props.errors}>
			<Head title="Categories" />

			<div className="py-6">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 bg-white border-b border-gray-200">
							{props.categories.map((category) => (
								<Fragment key={category.id}>
									<CategoryCard
										id={category.id}
										title={category.title}
										description={category.description}
									/>
								</Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
		</Authenticated>
	);
};

export default Categories;
