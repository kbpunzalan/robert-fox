import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import AboutMe from './components/aboutMe/AboutMe';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
