import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemList from "./pages/ItemList";
import ItemDatas from "./pages/ItemDatas";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.page}>
        
        <Navbar />

        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/item/:id" element={<ItemDatas />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "black",
    color: "grey",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto"
  }
};

export default App;
