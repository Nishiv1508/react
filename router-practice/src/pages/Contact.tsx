import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <p>useNavigate used here</p>
      <button onClick={() => navigate("/")}>Homepage</button>
      <br />
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
}
