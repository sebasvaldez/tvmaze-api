import "./offCanvas.css";
import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Burger } from "../Icons/Icons";
import { useAuth } from "../../contexts/AuthProvider";

import Loader from "../Loader/Loader";
import sinPortada from "../../assets/sin-portada.png";
import { Link } from "react-router-dom";

const OffCanvasFav = () => {
  const localStorage = window.localStorage;
  const userName = localStorage.getItem("user");

  const [show, setShow] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const { favorites } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="transparent" onClick={handleShow}>
        <Burger />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="name-canvas text-white">
            {userName}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-white">
          {!favorites ? (
            <Loader />
          ) : (
            favorites.map((movie) => {
              return (
                <div className="canvas-style" key={movie.id}>
                  <Link  to={`/item/${movie.id}`}>
                  <img
                    src={movie.image == null ? sinPortada : movie.image.medium}
                    alt="imagen de portada de cada pelicula"
                  />
                  <h6>{movie.name}</h6>
                  </Link>
                </div>
              );
            })
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasFav;
