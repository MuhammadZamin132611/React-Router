// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Componenet/Home'
import About from './Componenet/About'
import NavBar from './Componenet/NavBar'
import Page404 from './Componenet/Page404';
function App() {
  return (
    <div className="App">
      {/* <h1>Hello React Router 6</h1> */}
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/*' element={<Page404 />} /> */}
        <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
