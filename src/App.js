import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Products from "./scenes/Products/Products";
import About from "./scenes/home/About";
import Account from "./scenes/account/Account";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Authentication from './scenes/authentication/authentication.component';
import ContactPage from './scenes/contact/ContactPage'
import OrderForm from './components/OrderForm'
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="account" element={<Account />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='auth' element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order" element={<OrderForm />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
