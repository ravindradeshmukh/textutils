import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState({color:'#123456', backgroundColor:'white', mode: 'light'});
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const showMode = ()=>{
    let val = !darkMode;
    setDarkMode(val);
    if(val){
      setMode({color:'white', backgroundColor:'#123456', mode: 'dark'});
      document.body.style.backgroundColor = '#123456';
      showAlert("Dark mode enabled", "success");
    }
    else{
      setMode({color:'#123456', backgroundColor:'white', mode: 'light'});
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
    }
  }
  
  return (
    <>
      <Navbar title="Text Util" mode={mode} darkMode={darkMode} showMode={showMode}/>
      <Alert alert={alert}/>
      <div className='container my-3' style={mode}>
        {/* <Routes>
            <Route index element={<TextForm mode={mode}  />} />
            <Route path="/about" element={<About mode={mode}/>} />
        </Routes> */}
        <TextForm mode={mode}  />
        {/* <About mode={mode}/> */}
      </div>
    </>
  );
}

export default App;
