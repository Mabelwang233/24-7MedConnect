import React from 'react'; 
import{ useState, useRef, useEffect} from 'react';
import './App.css'; 
import Nav from './Components/Nav/Nav';
import Symptoms from './Components/Symptoms/Symptoms';
import DocInfo from './Components/DocInfo/DocInfo';
import { duration } from '@mui/material';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { symptomsPost} from '../api/api';
import VideoChat from './Components/VideoCall/VideoChat';

import Signup from './Components/SIgnUp/Signup';


function App() {
  const [symptoms, setSymptoms] = useState(0);
  const [doctors, setDocs] = useState([]);
  const [showRef, setShowRef ]= useState(true);

  const handleSubmitClick = async() => {
    try {

      if(symptoms === ""){
        window.alert("BAD");
      }
      await symptomsPost({symptoms})
      .then((res) => {
        setDocs(res.data.doctors);
        setShowRef(false);
      })
    } catch (error) {
      
    }
  }

  const handleInputData = (data) => {
    setSymptoms(data);
  }
  
  useEffect(() => {


  },[]);

  return (
    <div className="mainContainer">


    <Nav/> 
    <VideoChat/>
    {/* <Signup/> */}

     {/* {showRef && <Symptoms onData={handleInputData} onClick={handleSubmitClick}/>}
     

      <div className='containerWrapper'>
        
        {doctors.map((doctor) => (
         
            <DocInfo Name={doctor.Name} Speciality={doctor.Specialty} Status={doctor.Online_Status} Languages={doctor.Languages} />
 
            ))}
      </div>  */}
    </div>
  )
}

export default App

