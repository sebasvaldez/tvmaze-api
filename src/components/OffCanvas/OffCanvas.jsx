import "./offCanvas.css";
import { useState, useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Burger } from "../Icons/Icons";
import { useAuth } from "../../contexts/AuthProvider";
import { getMovieId } from "../../../asyncMock";
import Loader from "../Loader/Loader";

const OffCanvas = () => {
  const localStorage = window.localStorage;
  const userName = localStorage.getItem("user");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesFav, setMoviesFav] = useState([]); //aca van a ir los favoritos

  const { favorites } = useAuth();

  useEffect(() => {
    try {
      favorites.map((movie) => {
        getMovieId(movie.id).then((data) =>
          console.log(data)
        );
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

 
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
          {/* {isLoading ? (
            <Loader />
          ) : (
            moviesFav.map((movie) => {
              return (
                <div key={movie.id}>
                  <h6>{movie.id}</h6>
                </div>
              );
            })
          )} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
