import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';
import CardBook from './CardBook';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/CardBook" element={<CardBook />} />
        </Routes>
      </Router>
    );
}

export default App;
