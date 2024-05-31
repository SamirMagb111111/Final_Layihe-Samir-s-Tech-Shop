import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const handleMessageSend = () => {
    // Input elementini tapmaq və daxilindəki mətni əldə etmək
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    // Əgər mesaj boş deyilsə, onu konsola çap etmək və inputun dəyərini silmək
    if (message.trim() !== '') {
      console.log('Göndərilən mesaj:', message);
      messageInput.value = ''; // Inputdakı mətni silmək
    } else {
      console.log('Boş mesaj göndərilməz.');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Let us know your suggestions and complaints</h1>
      <p>Always at your service</p>
      <div>
        <input id='messageInput' type='text' placeholder='Your message' />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default NewsLetter;
