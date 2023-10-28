import React from 'react';
import { useLocation } from "react-router-dom";
import "./Thank.css";
export default function Thank() {
  const location = useLocation();
  let email = location.state.email;
  let comment = location.state.comment;
  return(
    <div className='thank-wrapper'>
      <h1>Thank you,  {email}!</h1>
      <p>We appreciate your comment: {comment}</p>
    </div>
    
  );
}