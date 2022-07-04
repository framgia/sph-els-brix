const LessonCard = ({ wordInJapanese, romanizedWord }) => {
	return (
		<div className="mt-4 p-4 border rounded grid grid-cols-3 gap-4 place-items-center">
			<div className="col-span-2 flex flex-col items-center">
				<p className="font-bold text-4xl">{wordInJapanese}</p>
				<p>({romanizedWord})</p>
			</div>

			<div className="flex flex-col">
				<div className="flex items-center gap-4 mb-2">
					<input type="radio" name={romanizedWord} value="one" />
					<label>One</label>
				</div>

				<div className="flex items-center gap-4 mb-2">
					<input type="radio" name={romanizedWord} value="two" />
					<label>Two</label>
				</div>

				<div className="flex items-center gap-4 mb-2">
					<input type="radio" name={romanizedWord} value="three" />
					<label>Three</label>
				</div>

				<div className="flex items-center gap-4 mb-2">
					<input type="radio" name={romanizedWord} value="four" />
					<label>Four</label>
				</div>
			</div>
		</div>
	);
};

export default LessonCard;
