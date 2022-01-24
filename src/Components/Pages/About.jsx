import React from 'react';
import Card from "../Shared/Card"
import {Link} from "react-router-dom"

const About = () => {
  return (
      
      <Card>
          <div className="about">
          <h1>About this project</h1>
          <p>this is the React app for Feedback for a product or services</p>
           <p>Version 1.0.0</p>
           <p>
               <Link to ="/">
               Go Back Home</Link>
           </p>
      </div>
      
  </Card>
  )
};

export default About
