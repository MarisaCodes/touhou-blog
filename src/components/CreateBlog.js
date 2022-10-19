import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, text, author };
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then((res) => {
          if (res.ok) {
            navigate("/");
          } else {
            throw Error(res.status + " " + res.statusText);
          }
        })
        .catch((err) => {
          setErr(err.message);
        });
    }, 1000);
  };
  return (
    <form className="create" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Title: </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Body: </label>
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
      </div>

      <div>
        <label>Author: </label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} />
      </div>

      {!isPending && (
        <input className="create-btn" type="submit" value="Submit" />
      )}
      {isPending && !err && (
        <button className="create-btn" disabled>
          Creating blog...
        </button>
      )}
      {err && <p>{err}</p>}
    </form>
  );
};

export default CreateBlog;
