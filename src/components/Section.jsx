import { useParams } from 'react-router-dom';
import useFetch from '../webhooks/useFetch';

function Section() {
	const { sectionId } = useParams();
	const section = useFetch(`http://localhost:7000/sections/${sectionId}`, []);
	
	return (
		<div className="section">
			<div className="section-info">
				<h1>{section.name}</h1>
				<p>{section.description}</p>
				<h3>{section.interestingFact}</h3>
				<h4>Current Crew:</h4>
				{section.currentCrew ? (
					<ul>
						{section.currentCrew.map((c) => (
							<li key={c}>{c}</li>
						))}
					</ul>
				) : (
					<p>Crew is missing!</p>
				)}
			</div>
		</div>
	);
}

export default Section;
