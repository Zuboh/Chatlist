import { Box, OutlinedInput, styled } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const Input = styled(OutlinedInput)(() => ({
  borderRadius: "8px",
  minHeight: "20px",
  width: "100%",
  background: "#fff",
}));

const InputChat = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      setChangeIcon(true);
    } else {
      setChangeIcon(false);
    }
  };

  return (
    <Box
      sx={{
        flex: "0 1 auto",
        backgroundColor: "#f0f2f5",
        padding: "5px 16px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InsertEmoticonIcon fontSize="large" sx={{ margin: "0 8px" }} />
      <AddIcon fontSize="large" sx={{ margin: "0 8px" }} />
      <Box sx={{ padding: "9x 12px", width: "100%" }}>
        <Input
          placeholder="Scrivi un messaggio"
          onChange={(e) => handleOnChange(e)}
          value={inputValue}
        />
      </Box>
      {changeIcon ? (
        <SendIcon fontSize="large" sx={{ margin: "0 8px" }} />
      ) : (
        <MicIcon fontSize="large" sx={{ margin: "0 8px" }} />
      )}
    </Box>
  );
};

export default InputChat;
