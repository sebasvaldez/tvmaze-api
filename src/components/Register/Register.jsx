import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";


const Register = () => {
  const [userReg, setUserReg] = useState({ email: "", password: "" });
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { createUser, db, userDate } = useAuth();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");
      const userCredential = await createUser(userReg.email, userReg.password);
      const user = userCredential.user;

      await userDate( name, userReg.email,user.uid);  

      
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("El correo electrónico no es válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El correo electrónico ya está en uso");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      }
    }
  };

  return (
    <div className="form-class">
      <h3 className=" text-start mx-5">Registrar nuevo usuario</h3>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre completo"
        />
        <input
          type="email"
          name="email"
          value={userReg.email}
          placeholder="Correo electrónico"
          onChange={(e) => setUserReg({ ...userReg, email: e.target.value })}
        />

        <input
          type="password"
          name="password"
          value={userReg.password}
          onChange={(e) => setUserReg({ ...userReg, password: e.target.value })}
          placeholder="Contraseña"
        />

        <Button type="submit" className="btn btn-success button-log">
          registrarse
        </Button>
        {error && <p className="error">{error}</p>}
      </Form>
    </div>
  );
};

export default Register;
