import React from "react";

const LessonCard = ({
	onChangeHandler,
	choices,
	wordInJapanese,
	romanizedWord,
}) => {
	return (
		<div className="mt-4 p-4 border rounded grid grid-cols-3 gap-4 place-items-center">
			<div className="col-span-2 flex flex-col items-center">
				<p className="font-bold text-4xl">{wordInJapanese}</p>
				<p>({romanizedWord})</p>
			</div>

			<div className="flex flex-col">
				{choices.map((choice) => (
					<div className="flex items-center gap-4 mb-2" key={choice.id}>
						<input
							id={choice.id}
							type="radio"
							name={romanizedWord}
							value={choice.word}
							onChange={onChangeHandler}
							required
						/>
						<label htmlFor={choice.id}>{choice.word}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default LessonCard;
