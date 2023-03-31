import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './routes/Books';
import Category from './routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
