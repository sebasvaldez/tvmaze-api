import "./Footer.css";
import { LinkedIn, WhatsApp, GitHub } from "../Icons/Icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="block-left">
        {/* <Link to="https://github.com/sebasvaldez" className="link">
          Marcelo Sebastián Valdez
        </Link> */}

        <Link
          to="https://www.linkedin.com/in/marcelo-sebastian-valdez-miperfil/"
          className="link mx-3"
        >
          <LinkedIn />
        </Link>

        <Link to="https://github.com/sebasvaldez" className="link ">
          <GitHub />
        </Link>

        <Link to="http://wa.me/+5493814639721" className="link mx-3">
          <WhatsApp />
        </Link>
      </div>
      <div className="block-right  ">
        <Link
          onClick={() => {
            Swal.fire({
              title: "<h2>Bienvenido a MoviePop!</h2>",
              html: `<p>

                Descubre, Guarda y Disfruta de toda la
        información de tus Películas Favoritas ¡Te damos la bienvenida a a
        MoviePop! Este es un proyecto de práctica donde podrás explorar el
        emocionante mundo del cine y la televisión ¿Qué puedes hacer en nuestro
        sitio?<br>
        • Crear tu cuenta: Regístrate y crea tu propia cuenta
        personalizada en segundos. ¡Es rápido y fácil!<br>
        • Iniciar Sesión: Accede
        a tu cuenta en cualquier momento y desde cualquier lugar.<br>
        • Buscar Películas y Programas de TV:
        Explora una amplia variedad de películas y programas de TV de la base de
        datos de TVMaze.<br>
        • Agregar a Favoritos: Guarda tus películas y
        programas de TV favoritos en tu lista personal de favoritos. ¡Nunca
        perderás de vista lo que deseas ver!<br>
                </p>`,
            });
          }}
        >
          Info
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
