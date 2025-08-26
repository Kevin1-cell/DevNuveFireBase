import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert("Error al registrarse");
    }
  };

  return (
    <Container maxWidth="xs">
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
          <Typography variant="h5" mb={2}>
            Registro
          </Typography>
          <TextField
            label="Correo"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            Crear cuenta
          </Button>
          <Typography variant="body2" mt={2}>
            ¿Ya tienes cuenta?{" "}
            <Link href="/" underline="hover">
              Inicia sesión
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
