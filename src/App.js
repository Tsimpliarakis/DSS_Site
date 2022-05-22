import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './home/home.js';
import About from './about/about.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
