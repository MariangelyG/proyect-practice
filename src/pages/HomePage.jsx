import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigatePageTwoColors = () => {
    navigate("/twoColorsPage");
  };

  const handleNavigatePageScroll = () => {
    navigate("/scrollPage");
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#C263B2",
          height: "100vh",
          display: "grid",
          placeContent: "center",
          gap: "10px",
        }}
      >
        <Typography variant="h1">HomePage</Typography>
        <Box sx={{display:"flex", justifyContent:"space-around"}}>

        <Button
          onClick={handleNavigatePageTwoColors}
          variant="contained"
          color="secondary"
        >
          TwoColorPage
        </Button>
        <Button onClick={handleNavigatePageScroll} variant="contained">
          ScrollPage
        </Button>

        </Box>
      </Box>
    </>
  );
};
