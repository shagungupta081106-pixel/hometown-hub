import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function Navbar() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add("bg-black");
      document.body.classList.add("text-white");

    } else {

      document.body.classList.remove("bg-black");
      document.body.classList.remove("text-white");

    }

  }, [darkMode]);

  const handleLogout = () => {

    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");

  };

  return (

    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">

      <div className="flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-2xl font-bold">
          Hometown Hub 🌍
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-4 items-center">

          <Link to="/">Home</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/community">Community</Link>

          <Link to="/events">Events</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/create-post">Create Post</Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black px-4 py-2 rounded-lg"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

        {/* Mobile Hamburger */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="flex flex-col gap-4 mt-5 md:hidden">

          <Link to="/">Home</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/community">Community</Link>

          <Link to="/events">Events</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/create-post">Create Post</Link>

          <Link to="/notifications">Notifications</Link>

          <Link to="/members">Members</Link>

          <Link to="/stats">Stats</Link>

          <Link to="/forum">Forum</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/saved-posts">Saved Posts</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black px-4 py-2 rounded-lg"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      )}

    </nav>

  );

}

export default Navbar;