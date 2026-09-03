import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import BlogInfo from "../components/BlogInfo";

// useParams for getting params and const [searchParams, setSearchParams] = useSearchParams() for getting query string
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/blogs" element={<Blogs />}>
        <Route index element={<Navigate to="main" replace />} />
        {/* <Route index element={<p>Main Blogs</p>} /> */}
        <Route path="main" element={<p>Main Blogs</p>} />
        <Route path="entertainment" element={<p>Entertainment Blogs</p>} />
        <Route path=":id" element={<BlogInfo />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
