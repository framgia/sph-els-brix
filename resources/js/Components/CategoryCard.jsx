import { Link } from "@inertiajs/inertia-react";

import Button from "./Button";

const CategoryCard = ({ id, title, description }) => {
	return (
		<div className="mt-4 p-4 border rounded">
			<h1 className="font-bold">{title}</h1>
			<p>{description}</p>
			<Link href={route("lessons", id)}>
				<Button className="mt-4">Start</Button>
			</Link>
		</div>
	);
};

export default CategoryCard;
