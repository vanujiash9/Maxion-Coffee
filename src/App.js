import { Routes, Route } from "react-router-dom";
import "./App.css";
import BT4 from "./bt4/BT4";
import Login from "./bt4/login";
import Home from "./bt4/pages/Home";
import Product from "./bt4/pages/Product";
import About from "./bt4/pages/About";
import Register from "./bt4/pages/Register";
import Cart from "./bt4/pages/Cart";
import ProductList from "./bt4/pages/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/bt4" element={<BT4 />} >
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="productList" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;
