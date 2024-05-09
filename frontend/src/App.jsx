import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
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
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
