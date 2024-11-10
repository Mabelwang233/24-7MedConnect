import React from 'react'; 
import{ useState } from 'react';
import './App.css'; 
import Nav from './Components/Nav/Nav';
import Symptoms from './Components/Symptoms/Symptoms';
import DocInfo from './Components/DocInfo/DocInfo';

function App() {
  const [count, setCount] = useState(0)
  const docScrollRef = useState([]);


  return (
    <div className="mainContainer">
      <Nav/>
      <Symptoms/>
      {/* <DocInfo/> */}

       {/* <div className='docContainer' ref={docScrollRef}>
        {[...Array(5)].map((_, index) => (
          <DocInfo/> 
        ))} 
      </div> */}
    </div>
  )
}

export default App
