import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BridgePage from './pages/BridgePage';
import Section from './components/Section';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<BridgePage />} />
					<Route path="/sections/:sectionId" element={<Section />} />
					<Route path="*" />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
