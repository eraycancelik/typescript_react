import Header from "./Components/Layout/Header";
import style from "./App.module.css";
import ProductList from "./Components/Product/ProductList";
import SideBar from "./Components/SideBar/SideBar";
import Information from "./Components/Ui/Information";
import Footer from "./Components/Layout/Footer";
import { products } from "./Data/products";
import { categories } from "./Data/categories";
const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.flexContainer}>
        <div className={style.flex}>
          <Information />
        </div>
        <div className={style.gridContainer}>
          <SideBar categories={categories} />
          <ProductList productList={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
