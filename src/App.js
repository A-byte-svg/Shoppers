import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import{BrowserRouter,Routes,Route} from'react-router-dom';
import { ShopCategory } from "./pages/ShopCategory";
import { Cart } from "./pages/Cart";
import { LoginSignUp } from "./pages/LoginSignUp";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Footer } from "./components/Footer/Footer";
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} Category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} Category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kid_banner} Category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
