import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import ProductsPage from "./Pages/ProductsPage";
import ProfilePage from "./Pages/ProfilePage";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
