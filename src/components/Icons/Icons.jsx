import React from "react";

export const HomeIcon = ({ color, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="33.435"
      height="26"
      viewBox="0 0 33.435 26"
    >
      <path
        id="home-solid"
        d="M16.259,38.8l-10.7,8.814v9.513a.929.929,0,0,0,.929.929l6.5-.017a.929.929,0,0,0,.924-.929V51.549a.929.929,0,0,1,.929-.929h3.715a.929.929,0,0,1,.929.929V57.1a.929.929,0,0,0,.929.932l6.5.018a.929.929,0,0,0,.929-.929V47.6L17.147,38.8a.708.708,0,0,0-.888,0Zm16.9,5.991-4.852-4V32.747a.7.7,0,0,0-.7-.7h-3.25a.7.7,0,0,0-.7.7v4.214l-5.2-4.275a2.786,2.786,0,0,0-3.541,0L.237,44.786a.7.7,0,0,0-.093.981l1.48,1.8a.7.7,0,0,0,.981.095L16.259,36.415a.708.708,0,0,1,.888,0L30.8,47.66a.7.7,0,0,0,.981-.093l1.48-1.8a.7.7,0,0,0-.1-.983Z"
        transform="translate(0.015 -32.05)"
        fill={color}
      />
    </svg>
  );
};

export const SearchIcon = ({ color, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="26.995"
      height="27"
      viewBox="0 0 26.995 27"
    >
      <path
        id="search-solid"
        d="M26.628,23.343l-5.257-5.257a1.265,1.265,0,0,0-.9-.369h-.859a10.963,10.963,0,1,0-1.9,1.9v.859a1.265,1.265,0,0,0,.369.9l5.257,5.257a1.26,1.26,0,0,0,1.788,0l1.492-1.492A1.271,1.271,0,0,0,26.628,23.343ZM10.968,17.717a6.749,6.749,0,1,1,6.749-6.749A6.745,6.745,0,0,1,10.968,17.717Z"
        fill={color}
      />
    </svg>
  );
};

export const Separator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80%"
      height="1"
      viewBox="0 0 360 1"
      className="mx-auto"
    >
      <line
        id="Línea_38"
        data-name="Línea 38"
        x2="360"
        transform="translate(0 0.5)"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        opacity="0.09"
      />
    </svg>
  );
};

export const Login = ({ color, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      fill={color}
      className="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  );
};

export const Burger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#fff"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
};



