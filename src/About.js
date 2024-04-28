import React from 'react'
import Header from './component/Header'
import { useNavigate } from 'react-router-dom'



const About = () => {
    const navigate = useNavigate();
    const gotToContact = ()=>{
        navigate('/contact');
    }

    const gotToBack = ()=>{
        navigate(-1);
    }

  return (
    <div>
        {/* <Header/> */}
        <h1>
            Hello This Is About Router <br />
            <button onClick={()=>gotToContact()}>Go To Contact</button><br />
            <button onClick={()=>gotToBack()}>Go To Back</button>
        </h1>
    </div>
  )
}

export default About
