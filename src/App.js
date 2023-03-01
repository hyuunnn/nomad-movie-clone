import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import { AppWithNavigate } from './routes/Detail';

function App() {
  // return <Home />;
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<AppWithNavigate />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
