import React from 'react'; 
import './DocInfo.css';
import doc from "../../Utils/Images/doc1.png";



const DocInfo = (props) => {
    const {Name, Speciality, Status,  Languages} = props;

    const back = {
        backgroundColor: Status === 'Online' ? '#5e8669' : '#333333',  // Change color based on Status
        padding: '10px',
        borderRadius: '5px',
        color: 'white', // Ensures text is readable on the background
      };
    

  return (
    <div className="docContainer" style={back} >
        <div className='nameContainer'>
            <h1>{Name}</h1>
        </div>
        <div className="imgContainer">
            <img src={doc}></img>
        </div>
        <div className="infoContainer">
            <h2>{Speciality}</h2>
        </div>

        <div className="infoContainer">
            <h2>{Languages}</h2>
        </div>

        <div className="infoContainer callButton" >
            <button className='callButton'>Call</button>
        </div>
    </div>
  )
}

export default DocInfo