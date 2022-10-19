import BlogList from "./BlogList";
import useFetch from "../custom-hooks/useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    statusText,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div className="status">{statusText}</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
