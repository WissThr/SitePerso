import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Wissam Tahiri</h1>
      <nav>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/about" style={styles.link}>À propos</Link>
        <Link to="/projects" style={styles.link}>Projets</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#282c34",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },  
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  link: {
    color: 'white',
    marginLeft: '1rem',
    textDecoration: 'none',
  }
}

export default Header
