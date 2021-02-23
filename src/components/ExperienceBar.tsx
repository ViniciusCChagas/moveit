interface ExperienceBarProps {
	maxExperience: number;
	currentExperience: number;
	currentLevel: number;
}

export function ExperienceBar(props: ExperienceBarProps) {
	let experienceBarWidth = (
		(100 / props.maxExperience) *
		props.currentExperience
	).toFixed(0);

	return (
		<header className='experience-bar'>
			<span>0 xp</span>
            <span className='current-level'>Level {props.currentLevel}</span>
			<div>
				<div style={{ width: `${experienceBarWidth}%` }}> </div>
				<span
					className='current-experience'
					style={{ left: `${experienceBarWidth}%` }}
					hidden={props.currentExperience <= 0}
				>
					{props.currentExperience} xp
				</span>
			</div>
			<span>{props.maxExperience} xp</span>
		</header>
	);
}
