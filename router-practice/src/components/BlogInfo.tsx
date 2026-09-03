import { useParams, useSearchParams } from "react-router-dom";

export default function BlogInfo() {
  const { id } = useParams(); //destructuring params
  //   const params = useParams();
  //   const {id} = params;   //destructure afterwards

  const [searchParams, setSearchParams] = useSearchParams();
  //   const [searchParams] = useSearchParams();   ===>   we can do this also if we just want to get query string
  const data = searchParams.get("data");
  const blogName = searchParams.get("blogName");
  return (
    <div>
      <p>
        Welcome to {id} blog and data is {data} and blog is {blogName}
      </p>

      <button onClick={() => setSearchParams({ blogName: "Sports Blog" })}>
        Click Me
      </button>
    </div>
  );
}
