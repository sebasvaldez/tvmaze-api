import "./offCanvas.css";
import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

import { Burger } from "../Icons/Icons";

const OffCanvas = () => {


    const localStorage = window.localStorage;
    const userName = localStorage.getItem("user");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  return (
    <>
      <Button variant="transparent" onClick={handleShow}>
        <Burger />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="name-canvas text-white">{userName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-white">Aqui deben ir todas las pelis de la lista de favoritos</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
