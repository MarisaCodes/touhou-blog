import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="title">
        Touhou <span className="blog-span">Blog</span>
      </div>
      <div className="nav-options">
        <Link to="/">Home</Link>
        <Link to="create">New blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
