import { Routes, Route } from "react-router-dom";
// Header and Footer
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Home
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
