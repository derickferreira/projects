import { FormEvent, useState } from "react";

const ChatFormComponent = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <section className="chat_form">
      <form className="chat_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat_input"
          placeholder="Enter with a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
