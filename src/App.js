import React, { useState } from 'react';
import './App.css';
import Button from './Button/Button';
import Input from './Input/Input';
import Label from './Label/Label';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import { Login } from '@mui/icons-material';
import Select from './Components/Select';
import Page1 from './Pages/Page1';
function App() {
  const [name,setName]=useState('');
  const handleClick=(e)=>{
    e.preventDefault();
    alert(`Name is ${name}`)
  }
  return (
    <div className="App">
      {/* <Label label="Enter your name"/>
      <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <Button handleClick={handleClick}/> */}
      {/* <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router> */}
      {/* <Select/> */}
      <Page1/>
    </div>
  )
}

export default App
