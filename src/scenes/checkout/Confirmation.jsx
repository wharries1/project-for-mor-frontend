import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <Box m="200px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Thank you for your purchase</strong>
      </Alert>
      <Button
        onClick={() => {
          navigate("/");
        }}
        color="primary"
        variant="contained"
        sx={{
          backgroundColor: shades.primary[200],
          boxShadow: "none",
          color: "white",
          borderRadius: 0,
          marginTop: "20px",
          padding: "15px 40px",
        }}
      >
        Homepage
      </Button>
    </Box>
  );
};

export default Confirmation;
