import React from 'react'

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Wissam Tahiri</h1>
      <nav>
        <a href="#about" style={styles.link}>À propos</a>
        <a href="#projects" style={styles.link}>Projets</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
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
