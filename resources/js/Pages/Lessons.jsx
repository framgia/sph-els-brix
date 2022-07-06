import { Fragment } from "react";
import { Head } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/Authenticated";
import LessonCard from "@/Components/LessonCard";
import Button from "@/Components/Button";

const Lessons = (props) => {
	return (
		<Authenticated auth={props.auth} errors={props.errors}>
			<Head title="Lessons" />

			<div className="py-6">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 bg-white border-b border-gray-200 flex flex-col">
							<h1 className="font-bold">{props.category}</h1>

							<div className="grid grid-cols-2 gap-4">
								{props.lessons.map((lesson) => (
									<Fragment key={lesson.id}>
										<LessonCard
											choices={props.choices.filter(
												(choice) => choice.lessonId === lesson.id
											)}
											wordInJapanese={lesson.wordInJapanese}
											romanizedWord={lesson.romanizedWord}
										/>
									</Fragment>
								))}
							</div>

							<div className="self-end mt-8">
								<Button>Submit Answers</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Authenticated>
	);
};

export default Lessons;
