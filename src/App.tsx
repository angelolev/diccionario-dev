import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TermsPage from './components/TermsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;