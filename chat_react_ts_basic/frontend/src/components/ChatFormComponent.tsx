const ChatFormComponent = () => {
  return (
    <section className="chat_form">
      <form className="chat_form">
        <input
          type="text"
          className="chat_input"
          placeholder="Enter with a message"
          required
        />
        <button type="submit" className="chat_button">
          <span className="material-symbols-outlined">send</span>
        </button>
      </form>
    </section>
  );
};

export default ChatFormComponent;
