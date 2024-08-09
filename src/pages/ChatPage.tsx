import Box from "@mui/material/Box";
import HeaderChat from "../components/HeaderChat";
import InputChat from "../components/InputChat";
import WhatsappBackground from "../assets/images/design.jpg";
import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext";

const ChatPage = () => {
  const { id_chat } = useParams();
  console.log(id_chat);
  const chatID = id_chat ? parseInt(id_chat, 10) : NaN;
  const { chatData } = useChat();

  const findChatById = (chatId: number) => {
    return chatData.find((chat) => chat.id === chatId);
  };

  const dataChat = findChatById(chatID);

  console.log(dataChat?.name)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <HeaderChat name={dataChat?.name} />
      <Box
        sx={{
          flex: "1 1 auto",
          overflow: "auto",
          backgroundImage: `url(${WhatsappBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <InputChat />
    </Box>
  );
};

export default ChatPage;
