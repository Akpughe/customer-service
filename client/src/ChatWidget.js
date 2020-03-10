import React from 'react';
import PropTypes from 'prop-types';

const ChatWidget = ({
  newMessage,
  sendMessage,
  handleInput,
  currentUser,
  messages
}) => {
  const ChatSession = messages.map(message => {
    const user = message.senderId === currentUser.id ? 'user' : 'support';
    return <span className={`${user} message`}>{message.text}</span>;
  });
  return (
    <section className="chat">
      <div className="chat-widget">
        <header className="chat-header">
          <h2>Got Questions? Chat with us</h2>
        </header>
        <section className="chat-body">{ChatSession}</section>

        <form onSubmit={sendMessage} className="message-form">
          <input
            className="message-input"
            autoFocus
            name="newMessage"
            placeholder="Compose your message and hit ENTER to send"
            onChange={handleInput}
            value={newMessage}
          />
        </form>
      </div>
    </section>
  );
};

ChatWidget.proptypes = {
    newMessage: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(Proptypes.object).isRequired,
    currentUser: PropTypes.object.isRequired
  };

export default ChatWidget
