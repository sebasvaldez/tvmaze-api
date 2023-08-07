import "./Loader.css"
import { Spinner } from "react-bootstrap"
const Loader = () => {
  return (
    <div >
        <Spinner animation="border" variant="primary" size="xl" />
    </div>
  )
}

export default Loader