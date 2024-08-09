import HeaderList from "../components/HeaderList";
import Box from "@mui/material/Box";
import ChatList from "../components/ChatList";
import Footer from "../components/Footer";

const ChatListPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        borderRight: "1px solid #f0f2f5"
      }}
    >
      <HeaderList />
      <ChatList />
      <Footer />
    </Box>
  );
};

export default ChatListPage;
