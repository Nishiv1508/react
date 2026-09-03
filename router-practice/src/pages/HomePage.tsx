import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>

      <p>Normal Link</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </div>
  );
}
