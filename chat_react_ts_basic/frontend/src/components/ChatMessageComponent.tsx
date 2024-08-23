const ChatMessageComponent = () => {
  return (
    <section className="chat">
      <section className="chat_messages">
        <div className="message_self">Hello World!</div>

        <div className="message_other">
          <span className="message_sender">Derick</span>
          Hello World
        </div>
      </section>
    </section>
  );
};

export default ChatMessageComponent;
