import React, { useState } from 'react';
import Dialog from './Dialog';
import { handleInput } from './sharedMethod';

const Customer = ({handleInput}) => {
  const [userId, setUserId] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);
//   const [value, setName] = useState("");

  const showDialog = () => {
    setDialogOpen(!isDialogOpen);
  };

  const launchChat = e => {
    e.preventDefault();
  };



  return (
    <div className="customer-chat">
      <h1>Imaginary Service</h1>
      <p>Need help? Chat with us</p>
      <button onClick={showDialog} className="contact-btn">
        Contact Support
      </button>

      {isDialogOpen && (
        <Dialog
          username={userId}
        //   value={value}
          handleInput={handleInput}
          launchChat={launchChat}
        />
      )}
    </div>
  );
};
export default Customer;
