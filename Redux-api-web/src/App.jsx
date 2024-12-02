import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Redux-api/Navbar";
import ProductList from "./Redux-api/ProductList";
import ProductDetail from "./Redux-api/ProductDetail";
import Cart from "./Redux-api/Cart";

function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

