import Button from "./Button";

const CategoryCard = ({ title, description }) => {
	return (
		<div className="mt-4 p-4 border rounded">
			<h1 className="font-bold">{title}</h1>
			<p>{description}</p>
			<Button className="mt-4">Start</Button>
		</div>
	);
};

export default CategoryCard;
