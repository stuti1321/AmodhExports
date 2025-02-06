import React, { useState } from 'react';
import "../styles/Protected.scss"

const PasswordForm = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
  };

  return (
    <div className="protectform">
         <form onSubmit={handleSubmit}>
      <input 
      className='catalogueinput'
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="cataloguebtn" type="submit">Submit</button>
    </form>
    </div>
   
  );
};

export default PasswordForm;