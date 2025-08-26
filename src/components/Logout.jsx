import { signOut } from "firebase/auth";
import { auth } from "../firebase/config"; // Ajusta la ruta si tu archivo está en otra carpeta

export default function Logout() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Sesión cerrada");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
}
