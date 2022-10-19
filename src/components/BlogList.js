import { Link } from "react-router-dom";
const BlogList = ({ blogs }) => {
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={"blog-details/" + blog.id} className="blog-title">
            {blog.title}
          </Link>
          <div className="blog-text">{blog.text}</div>
          <p className="blog-author">Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
