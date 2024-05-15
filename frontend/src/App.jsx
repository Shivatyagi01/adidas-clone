import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// Header and Footer
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Home
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Category />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
