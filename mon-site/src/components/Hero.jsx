import React from 'react'

function Hero() {
  return (
    <section style={styles.hero}>
      <h2>Bienvenue !</h2>
      <p>Je suis Wissam Tahiri, étudiant en ingénierie informatique.</p>
      <p>Étudiant passionné par le développement informatique, je conçois des solutions élégantes et efficaces pour répondre aux défis numériques de demain.</p>
    </section>
  )
}

const styles = {
  hero: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
}

export default Hero
