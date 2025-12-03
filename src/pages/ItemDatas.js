import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../services/api";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemById(id)
      .then(setItem)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{textAlign: "center"}}>Item #{id}</h1>     

      {loading ? <p>Betöltés...</p> : (
        <pre style={styles.pre}>
          {JSON.stringify(item, null, 2)}
        </pre>
      )}
    </div>
  );
}

const styles = {
  pre: {
    textAlign: "center",
    background: "grey",
    color: "white",
    padding: "15px",
    borderRadius: "8px",
    overflow: "auto",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  }
};