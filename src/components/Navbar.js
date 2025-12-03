import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Items</Link>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "12px 20px",
    background: "lightgrey",
    display: "flex",
    gap: "20px",
    borderRadius: "15px",
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
