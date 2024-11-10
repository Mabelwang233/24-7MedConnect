import React, {useState} from 'react';
import './Symptoms.css';
import {symptomsPost} from "../../../api/api.js"

const Symptoms = () => {
  const [symptoms, setSymptoms] = useState("");

  const handleSubmitClick = async() => {
    try {

      if(symptoms === ""){
        window.alert("BAD");
      }
      await symptomsPost({symptoms})
      .then((res) => {
        console.log(res);
      })
    } catch (error) {
      
    }
  }
  return (
    <div className="symptoms_container">
        <form className='symptoms_form'> 
            <input onChange={(e) => setSymptoms(e.target.value)} className="symptoms_input" type='text' placeholder='Please explain your problem briefly'/>
            <button onClick={handleSubmitClick} type='submit' className='symptoms_submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Symptoms