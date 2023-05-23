import useFetch from '../webhooks/useFetch';
import { Link } from 'react-router-dom';

const BridgePage = () => {
	// Get Sections from json-server
	const sections = useFetch('http://localhost:7000/sections', []);
	return (
		<div className="bridge-header">
			<div className="bride-header-text">
				{sections.map((s) => (
					<div className="section-portal" key={s.id}>
						{/* Create links for each section */}
						<Link className="section-link" to={`/sections/${s.id}`}>
							<h3>
								<span>{s.name}</span>
							</h3>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default BridgePage;
