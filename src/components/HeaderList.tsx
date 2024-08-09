import Box from "@mui/material/Box";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const HeaderList = () => {
  return (
    <Box
      sx={{
        padding: "20px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h2>Chats</h2>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
        <ChatBubbleOutlineRoundedIcon />
        <MoreVertIcon />
      </Box>
    </Box>
  );
};

export default HeaderList;
