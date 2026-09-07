import { Navigate, Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Blogs from "../pages/Blogs";
// import BlogInfo from "../components/BlogInfo";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Blogs = lazy(() => import("../pages/Blogs"));
const BlogInfo = lazy(() => import("../components/BlogInfo"));

// useParams for getting params and const [searchParams, setSearchParams] = useSearchParams() for getting query string
function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
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
    </Suspense>
  );
}

export default AppRoutes;
