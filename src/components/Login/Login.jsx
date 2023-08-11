import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-class">
      <h3 className=" text-start mx-5">Ingresá con tus datos</h3>

      <Form onSubmit={handleSubmit}>
        <input type="email" name="mail" placeholder="Correo electrónico" />

        <input type="password" name="password" placeholder="Contraseña" />

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
