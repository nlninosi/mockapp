import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Users } from './pages/Users';
import React from 'react';

//import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing/>}/>'
          <Route path='/users' element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
