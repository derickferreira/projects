import { useContext } from "react";

// context
import { UserContext } from "../context/UserContext";

// interfcae
interface IMessage {
  userId: string;
  userName: string;
  userColour: string;
  message: string;
  timestamp: number;
}

const ChatMessageComponent = ({ messages }: { messages: IMessage[] }) => {
  const context = useContext(UserContext);
  if (!context) return;
  const { user } = context;

  return (
    <section className="chat">
      <section className="chat_messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.userId === user?.id ? "message_self" : "message_other"
            }
          >
            <span className="message_sender" style={{ color: msg.userColour }}>
              {msg.userId == user?.id ? "you" : msg.userName}
            </span>
            {msg.message}
          </div>
        ))}

        {/* <div className="message_self">Hello World!</div>

        <div className="message_other">
          <span className="message_sender">Derick</span>
          Hello World
        </div> */}
      </section>
    </section>
  );
};

export default ChatMessageComponent;
