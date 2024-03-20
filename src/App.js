// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Componenet/Home'
import About from './Componenet/About'
import NavBar from './Componenet/NavBar'
// import Page404 from './Componenet/Page404';
import User from './Componenet/User';
import Filter from './Componenet/Filter';
import Contact from './Componenet/Contact';
import Company from './Componenet/Company';
import Chanel from './Componenet/Chanel';
import Other from './Componenet/Other';
import Login from './Componenet/Login';
import Protected from './Componenet/Protected';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello React Router 6</h1> */}
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Protected  Componenet={Home}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<Protected  Componenet={About}/>} />
        <Route path='/user/:name' element={<User />} />
        <Route path='/filter' element={<Protected  Componenet={Filter}/>} />
        {/* <Route path='/*' element={<Page404 />} /> */}
        <Route path='/*' element={<Navigate to="/" />} />
        <Route path='/contact/' element={<Contact />} >
          <Route path='company' element={<Company />}/>
          <Route path='chenal' element={<Chanel />}/>
          <Route path='other' element={<Other />}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
