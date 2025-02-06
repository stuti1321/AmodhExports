import React, { useState } from 'react';
import PasswordForm from './Protected';
import "../styles/Catalogue.scss"

const ProtectedPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handlePasswordSubmit = (password) => {
    // Check if the password is correct (you can use any authentication logic here).
    if (password === 'stuti') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className='cataloguekey'>
      <p className='startp'>We appreciate your interest in our carpet export business. To learn more about our products,
request a catalogue, or discuss potential collaborations, please reach out to us via our
contact information. We look forward to serving you and fulfilling your carpet needs with
excellence.</p>
<p className="passkey">*To obtain the password, kindly reach out to us through our provided contact information or via WhatsApp.</p>
      {authenticated ? (
        <div className="maps">
          <h1>The catalogue is not available right now</h1>
       
        </div>
      ) : (
        <PasswordForm onPasswordSubmit={handlePasswordSubmit} />
      )}
      <p className='endp'>Thank you for visiting Amodh Exports, where artistry and quality meet to create stunning
carpets that enhance your living spaces.</p>
    </div>
  );
};

export default ProtectedPage;