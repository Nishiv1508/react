import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Navbar />
      <h1>About</h1>
      <p>Normal Link</p>
      <Link to="/">Homepage</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </div>
  );
}
