export const projectBlockStyle = {
  container: {
    backgroundColor: "#F9F7F7",
    borderRadius: "16px",
    padding: "clamp(1.5rem, 5vw, 3rem) clamp(1rem, 5vw, 2rem)",
    margin: "2rem auto",
    width: "100%", // ← change ça
    maxWidth: "1000px",
    boxSizing: "border-box", // ← essentiel
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },

  title: {
    fontSize: "clamp(1.8rem, 5vw, 3rem)", // responsive
    fontWeight: "700",
    color: "#112D4E",
    marginBottom: "2rem",
    textAlign: "center",
  },

  text: {
    fontSize: "clamp(1rem, 2.5vw, 1.4rem)", // responsive
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "1.5rem",
    textAlign: "justify",
  },

  image: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "12px",
    margin: "2rem auto",
    display: "block",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};
