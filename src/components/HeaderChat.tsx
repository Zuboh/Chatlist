import { Box } from "@mui/material";
import Propic from "./Propic";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const HeaderChat = ({ name  }: { name?: string }) => {

  return (
    <Box
      sx={{
        flex: "0 1 auto",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f0f1f5",
        height: "60px",
        padding: "0 16px",
      }}
    >
      <Propic height="40px" width="40px" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
      <div>{name}</div>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          gap: "4px",
        }}
      >
        <Box sx={{ padding: "8px" }}>
          <SearchIcon />
        </Box>
        <Box sx={{ padding: "8px" }}>
          <MoreVertIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderChat;
