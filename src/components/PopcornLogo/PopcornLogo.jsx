import './PopcornLogo.css'
import PopcornPng from "./assets/PopcornLogo.png";
const PopcornLogo = () => {
  return (
    <div>
      <figure className="logo-popcorn ">
        <img src={PopcornPng} alt="Logo de la aplicacion" />
      </figure>
      <svg
        id="Componente_3_1"
        data-name="Componente 3 – 1"
        xmlns="http://www.w3.org/2000/svg"
        width="236"
        height="67"
        viewBox="0 0 236 67"
      >
        <text
          id="MoviePop_"
          data-name="MoviePop!"
          transform="translate(118 54)"
          fill="#c48900"
          fontSize="50"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="-117.725" y="0">
            MoviePop!
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default PopcornLogo;
