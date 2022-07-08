import { Fragment, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/Authenticated";
import LessonCard from "@/Components/LessonCard";
import Button from "@/Components/Button";

const Lessons = ({ auth, category, choices, errors, lessons }) => {
	const initialValues = {};

	const {
		data,
		setData,
		post,
		processing,
		errors: formErrors,
	} = useForm(initialValues);

	useEffect(() => {
		lessons.forEach((lesson) => (initialValues[lesson.romanizedWord] = ""));
	}, []);

	const onChangeHandler = (event) => {
		setData(event.target.name, event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		console.log(data);

		if (!processing) return Inertia.visit(route("results"));
	};

	return (
		<Authenticated auth={auth} errors={errors}>
			<Head title="Lessons" />

			<div className="py-6">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 bg-white border-b border-gray-200 flex flex-col">
							<h1 className="font-bold">{category}</h1>

							<form
								className="grid grid-cols-2 gap-4"
								onSubmit={onSubmitHandler}
							>
								{lessons.map((lesson) => (
									<Fragment key={lesson.id}>
										<LessonCard
											choices={choices.filter(
												(choice) => choice.lessonId === lesson.id
											)}
											wordInJapanese={lesson.wordInJapanese}
											romanizedWord={lesson.romanizedWord}
											onChangeHandler={onChangeHandler}
										/>
									</Fragment>
								))}
								<div></div>
								<div className="mt-8 justify-self-end">
									{/* <Link href={route("results")}> */}
									<Button processing={processing}>Submit Answers</Button>
									{/* </Link> */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Authenticated>
	);
};

export default Lessons;
