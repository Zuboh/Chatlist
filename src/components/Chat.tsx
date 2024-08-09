import Box from "@mui/material/Box";
import Propic from "./Propic";
import { useNavigate } from "react-router-dom";

interface ChatProps {
  id: number;
  name: string;
  time: string;
}

const Chat = ({ id, name, time }: ChatProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chatlist/1/chat/${id}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "72px",
        margin: "0 10px",
        cursor: "pointer",
      }}
      onClick={() => handleClick()}
    >
      <Propic height="49px" width="49px" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          borderBottom: "1px solid #f0f2f5",
          padding: "0 10px",
        }}
      >
        <span>{name}</span>
        <span>{time}</span>
      </Box>
    </Box>
  );
};

export default Chat;
