import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <h1
          style={{
            ...styles.title,
            textAlign: isDesktop ? "center" : "left",
            flex: 1,
          }}
        >
          Wissam Tahiri
        </h1>

        {!isDesktop && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={styles.burger}>
            ☰
          </button>
        )}
      </div>

      {/* Nav visible si desktop OU menu mobile ouvert */}
      {(isDesktop || menuOpen) && (
        <nav
          style={{ ...styles.nav, flexDirection: isDesktop ? "row" : "column" }}
        >
          {["/", "/about", "/projects", "/contact", "/skills"].map(
            (path, idx) => {
              const labels = [
                "Accueil",
                "À propos",
                "Projets",
                "Contact",
                "Compétences",
              ];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) =>
                    isActive
                      ? { ...styles.link, ...styles.activeLink }
                      : styles.link
                  }
                >
                  {labels[idx]}
                </NavLink>
              );
            }
          )}
        </nav>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#112D4E",
    padding: "1rem 2rem",
    width: "100vw",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },

  title: {
    margin: 0,
    fontSize: "2rem",
    flex: "1 0 100%",
    textAlign: "center",
    fontFamily: "Protest Riot, sans-serif",
  },
  burger: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
    position: "absolute",
    right: "2rem",
  },
  nav: {
    flex: "1 0 100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  link: {
    color: "white",
    fontSize: "1.2rem",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#3F72AF",
    fontWeight: "bold",
  },
  topBar: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default Header;
