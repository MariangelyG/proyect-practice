import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const IrHome = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Button onClick={goToHome}>
      <HomeIcon color="secondary" />
    </Button>
  );
};
