import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        flex: "0 1 auto",
        backgroundColor: "#f0f2f5",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          color: "text.secondary",
          display: "flex",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <span>Made with</span>
        <span role="img" aria-label="love">
          💚
        </span>
        <span> by Lorenzo</span>
      </Typography>
    </Box>
  );
};

export default Footer;
