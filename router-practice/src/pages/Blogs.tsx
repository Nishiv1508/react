import { Outlet, useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate = useNavigate();
  const id: number = 123;
  const data: string = "Hellow meow meow";
  const blogName: string = "Movie blog";
  return (
    <div>
      <h1>Blogs</h1>
      <button onClick={() => navigate("/blogs/entertainment")}>
        Go to Entertainment Blogs
      </button>

      <button
        onClick={() =>
          navigate(`/blogs/${id}?data=${data}&blogName=${blogName}`)
        }
      >
        Go to specific Blog
      </button>
      {/* <Link to="/blogs/entertainment">Go to Entertainment Blogs</Link> */}
      <Outlet />
    </div>
  );
}
