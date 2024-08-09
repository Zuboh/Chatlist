import { Box } from "@mui/material";
import { useChat } from "../context/ChatContext";
import Chat from "./Chat";
import { useState } from "react";
import SearchChatList from "./SearchChatList";

const ChatList = () => {
  const { chatData } = useChat();

  const [filteredChatData, setFilteredChatData] = useState(chatData);

  const handleSearch = (searchTerm: string) => {
    const filteredData = chatData.filter((chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChatData(filteredData);
  };

  return (
    <>
      <SearchChatList onSearch={handleSearch} />
      <Box
        sx={{
          padding: "20px 25px",
          height: "100%",
          overflow: "auto",
        }}
      >
        {filteredChatData.map((chat) => (
          <Chat key={chat.id} name={chat.name} time={chat.time} id={chat.id} />
        ))}
      </Box>
    </>
  );
};

export default ChatList;
