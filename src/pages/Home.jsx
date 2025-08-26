import { Container, Typography, Button, Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 4,
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: 4,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" mb={2}>
            Bienvenido 🎉
          </Typography>
          <Typography variant="body1" mb={4}>
            Este es contenido privado solo para usuarios autenticados.
          </Typography>
          <Button variant="outlined" color="error" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
