import { useEffect, useContext, useState } from "react";

// components
import ChatFormComponent from "../components/ChatFormComponent";
import ChatMessageComponent from "../components/ChatMessageComponent";

// interface
interface IMessage {
  userId: string;
  userName: string;
  userColour: string;
  message: string;
  timestamp: number;
}

// context
import { UserContext } from "./../context/UserContext";
import { useWebSocket } from "./../context/WebSocketContext";

const ChatPage = () => {
  const context = useContext(UserContext);
  if (!context) return;

  const socket = useWebSocket();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { user } = context;

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message: IMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };
  }, [socket]);

  const sendMessage = (messageContext: string) => {
    if (!socket || !user) return;

    const message: IMessage = {
      userId: user.id,
      userName: user.name,
      userColour: user.colour,
      message: messageContext,
      timestamp: Date.now(),
    };

    socket.send(JSON.stringify(message));
  };

  return (
    <div className="container">
      <ChatMessageComponent messages={messages} />
      <ChatFormComponent onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatPage;
