import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import login from '../pages/home/login';

const routerPages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<login />} />
      <Route path="/login" element={<login />} />
      
    </Routes>
  </Router>
);

export default routerPages;
