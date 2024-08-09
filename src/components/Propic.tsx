import { Box } from "@mui/material";
import { styled } from "@mui/material";
import profile_pic from '../assets/images/profile_pic.jpg';

interface PropicProps {
  height?: string;
  width?: string;
}

const Icon = styled("div")(({ height, width}: PropicProps) => ({
  borderRadius: "50%",
  border: "none",
  height: height || "50px",
  width: width || "50px",
  backgroundImage: `url(${profile_pic})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
}));

const Propic = ({ height, width }: PropicProps) => {

  return (
    <Box
      sx={{
        padding: "0 15px 0 13px",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon height={height} width={width}></Icon>
    </Box>
  );
};

export default Propic;