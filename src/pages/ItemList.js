import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../services/api";

export default function ItemsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems()
      .then(data => {
        const list = Array.isArray(data) ? data : (data && data.items) ? data.items : [];
        setItems(list);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Összes elem</h1>

      {loading ? (
        <p>Betöltés...</p>
      ) : (
        <div style={styles.grid}>
          {(items || []).map(item => (
            <div key={item.id} style={styles.card}>
              <h3 style={styles.cardTitle}>Elem #{item.id}</h3>

              <pre style={styles.preview}>
                {JSON.stringify(item, null, 2).slice(0, 120)}...
              </pre>  
              <Link to={`/item/${item.id}`} style={styles.button}>

                Részletek →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}




// --------- STYLES ---------
const styles = {
  container: {
    padding: "20px"
  },

  title: {
    marginBottom: "2%",
    color: "#e2e8f0",
    textAlign: "center"
  },

  grid: {
    display: "grid",
    gap: "16px",

    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))"
  },

  card: {
    background: "grey",
    padding: "16px",
    border: "1px solidrgb(15, 84, 180)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "0.2s",
  },

  cardTitle: {
    textAlign: "center",
    margin: 0,
    color: "white",
    fontSize: "24px"
  },

  preview: {
    background: "lightgrey",
    color: "black",
    padding: "10px",
    borderRadius: "15px",
    overflow: "hidden",
    height: "80px"
  },

  button: {
    marginTop: "auto",
    textAlign: "center",
    padding: "8px 0",
    borderRadius: "20px",
    background: "white",
    color: "#0f172a",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.2s",
  }
};
