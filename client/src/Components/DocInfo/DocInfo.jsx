import React from 'react'; 
import './DocInfo.css';
import doc from "../../Utils/Images/doc1.png";

const DocInfo = () => {
  return (
    <div className="docContainer">
        <div className='nameContainer'>
            <h1>JOHN DOE</h1>
        </div>
        <div className="imgContainer">
            <img src={doc}></img>
        </div>
        <div className="infoContainer">
            <h2>Occupation</h2>
        </div>

        <div className="infoContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas voluptate, 
                sapiente ullam necessitatibus quae pariatur odio rerum quis? Fuga provident, 
                dolores suscipit distinctio quam voluptate dolor iusto perspiciatis nam.</p>
        </div>
    </div>
  )
}

export default DocInfo