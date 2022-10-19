import { useParams } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    isPending,
    statusText,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isPending && <div className="status">{statusText}</div>}
      {blog && (
        <article>
          <div className="blog-details-title">{blog.title}</div>
          <div className="blog-details-text">{blog.text}</div>
          <div className="blog-details-author">Written by: {blog.author}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
