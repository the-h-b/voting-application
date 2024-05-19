import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './AdminNav.css'
function AdminNav() {
  const location = useLocation();
  var id = location.pathname.split("/").pop();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    id=null;
    window.location.href=window.location.origin;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: "rgba(255, 99, 71, 0.2)" }}>
      <div className="nav">
        {window.innerWidth <= 768 && (
          <div className="menu-button" onClick={handleToggleMenu}>
            ☰
          </div>
        )}
        {window.innerWidth <= 768 && (
          <div className={`menu-items ${menuOpen ? "show" : ""}`}>
            <Link to={"/Admin/Home/" + id} className="nav-link text-dark">
              Home
            </Link>
            <Link to={"/Admin/VoterList/" + id} className="nav-link text-dark">
              Voters list
            </Link>
            <Link to={"/Admin/PartyList/" + id} className="nav-link text-dark">
              Parties list
            </Link>
            <Link to={"/Admin/IsVotedList/" + id} className="nav-link text-dark">
              Voted List
            </Link>
            <Link to={"/Admin/Results/" + id} className="nav-link text-dark">
              Results
            </Link>
            {id === "654718d311503067da7ec963" && (
              <Link to={"/Admin/AdminsList/" + id} className="nav-link text-dark">
                Manage Admins
              </Link>
            )}
            <Link to={"/Admin/Profile/" + id} className="nav-link text-dark">
              Profile
            </Link>
          </div>
        )}
        {window.innerWidth > 768 && (
          <div className="desktop-items">
            <Link to={"/Admin/Home/" + id} className="nav-link text-dark">
              Home
            </Link>
            <Link to={"/Admin/VoterList/" + id} className="nav-link text-dark">
              Voters list
            </Link>
            <Link to={"/Admin/PartyList/" + id} className="nav-link text-dark">
              Parties list
            </Link>
            <Link to={"/Admin/IsVotedList/" + id} className="nav-link text-dark">
              Voted List
            </Link>
            <Link to={"/Admin/Results/" + id} className="nav-link text-dark">
              Results
            </Link>
            {id === "654718d311503067da7ec963" && (
              <Link to={"/Admin/AdminsList/" + id} className="nav-link text-dark">
                Manage Admins
              </Link>
            )}
            <Link to={"/Admin/Profile/" + id} className="nav-link text-dark">
              Profile
            </Link>
          </div>
        )}
      </div>
      <div className="nav">
        <button
          onClick={handleLogout}
          className="btn"
          style={{ marginRight: "20px", backgroundColor: "rgba(212, 197, 185, 1)", color: "black" }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default AdminNav;



