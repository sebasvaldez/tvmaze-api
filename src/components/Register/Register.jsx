import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-class">
      <h3 className=" text-start mx-5">Registrar nuevo usuario</h3>

      <Form onSubmit={handleSubmit}>
        <input type="text" name="nombre" id="" placeholder="Nombre completo" />
        <input type="email" name="email" placeholder="Correo electrónico" />
        <input
          type="email"
          name="email2"
          placeholder="Repita el correo electrónico"
        />

        <input type="password" name="password" placeholder="Contraseña" />

        <Button type="submit" className="btn btn-success button-log">
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default Register;
