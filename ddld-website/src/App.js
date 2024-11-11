import './styles/defaultStyles.css';
import HomePage from './website/homepage'
import NavBar from './website/NavBar';
import { HashRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
