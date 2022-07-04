import defaultAvatar from "../Images/default-avatar.png";

const UserOverview = ({ firstname, lastname }) => {
	return (
		<div className="flex items-center gap-4 border rounded p-4">
			<div>
				<img
					src={defaultAvatar}
					alt="User image"
					className="rounded-full w-20"
				/>
			</div>
			<div>
				<h1 className="font-bold">{`${firstname} ${lastname}`}</h1>
				<p>Learned 0 words</p>
				<p>Learned 0 lessons</p>
			</div>
		</div>
	);
};

export default UserOverview;
