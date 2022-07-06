import React from "react";

const LessonCard = (props) => {
	return (
		<div className="mt-4 p-4 border rounded grid grid-cols-3 gap-4 place-items-center">
			<div className="col-span-2 flex flex-col items-center">
				<p className="font-bold text-4xl">{props.wordInJapanese}</p>
				<p>({props.romanizedWord})</p>
			</div>

			<div className="flex flex-col">
				{props.choices.map((choice) => (
					<div className="flex items-center gap-4 mb-2" key={choice.id}>
						<input type="radio" name={choice.word} value={choice.word} />
						<label>{choice.word}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default LessonCard;
