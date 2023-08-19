import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userLog, setUserLog] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await loginUser(userLog.email, userLog.password);

      navigate("/movieslist");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setError("El usuario no existe");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      if(error.code === "auth/missing-password"){
        setError("La contraseña es requerida")
      }

    }
  };

  return (
    <div className="form-class">
      <h3 className=" text-start mx-5">Ingresá con tus datos</h3>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          name="mail"
          placeholder="Correo electrónico"
          value={userLog.email}
          onChange={(e) => setUserLog({ ...userLog, email: e.target.value })}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={userLog.password}
          onChange={(e) => setUserLog({ ...userLog, password: e.target.value })}
        />

    <p className="error">{error}</p>

        <Button type="submit" className="btn btn-success button-log">
          Ingresar
        </Button>
      </Form>
      <p className="text-muted">
        Si no tienes cuenta, haz click <Link to="/register">aquí</Link>
      </p>
    </div>
  );
};

export default Login;
