// components
import ChatFormComponent from "../components/ChatFormComponent";
import ChatMessageComponent from "../components/ChatMessageComponent";

const ChatPage = () => {
  return (
    <div className="container">
      <ChatMessageComponent />
      <ChatFormComponent />
    </div>
  );
};

export default ChatPage;
