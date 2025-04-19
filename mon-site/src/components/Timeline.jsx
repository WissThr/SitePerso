import React from 'react'

function Timeline() {
  const events = [
    { year: "2020", title: "Bac Scientifique", desc: "Mention - Lycée L'Espérence Aulnay-Sous-Bois", icon: "🎓" },
    { year: "2020-2021", title: "Concours Médecine", desc: "Tentative en PASS",  icon: "💊" },
    { year: "2021-2023", title: "Prépa Intégrée", desc: "École Sup Galilée", icon: "📘" },
    { year: "2023-2024", title: "Cycle Ingé – Année 1", desc: "Bases solides en informatique", icon: "💻" },
    { year: "2024-2025", title: "Cycle Ingé – Année 2", desc: "Théorie, Développement, IA, Systèmes", icon: "⚙️" },
  ]

  return (
    <section style={styles.section}>
      <h4 style={styles.title}>📅 Mon parcours résumé</h4>
      <div style={styles.timelineContainer}>
        <div style={styles.timeline}>
          {events.map((event, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{event.icon}</div>
              <div style={styles.year}>{event.year}</div>
              <h4 style={styles.cardTitle}>{event.title}</h4>
              <p style={styles.cardDesc}>{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    backgroundColor: '#f7f9fc',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '2rem',
    color: '#222',
  },
  timelineContainer: {
    overflowX: 'auto',
    paddingBottom: '1rem',
  },
  timeline: {
    display: 'flex',
    gap: '2rem',
    minWidth: '700px',
    padding: '0 2rem',
  },
  card: {
    flex: '0 0 200px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '1rem',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  year: {
    fontWeight: 'bold',
    color: '#007bff',
    fontSize: '1rem',
    marginBottom: '0.3rem',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: '#555',
  },
}

export default Timeline
