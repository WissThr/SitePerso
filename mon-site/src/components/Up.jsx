import React, { useState, useEffect } from "react";

function Up() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={styles.button}>
        ↑
      </button>
    )
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "2rem",
    right: "1rem",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#112D4E",
    color: "#fff",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    opacity: 0.4,
    transition: "opacity 0.3s ease, transform 0.2s",
    zIndex: 1000,
  },
};

export default Up;
