import React, { useEffect, useState } from "react";
import Header from "./Components/Layout/Header";
import style from "./App.module.css";
import ProductList from "./Components/Product/ProductList";
import SideBar from "./Components/SideBar/SideBar";
import Information from "./Components/Ui/Information";
import Footer from "./Components/Layout/Footer";
import { products } from "./Data/products";

interface Product {
  Product_id: number;
  Product: string;
  Photo: string;
  Price: number;
  Category: string;
}

interface OrderDetails {
  product_id: number;
  product_name: string;
  product_photo: string;
  product_price: number;
  product_quantity: number;
  total_price: number;
}

type Props = {};

const App: React.FC<Props> = (props) => {
  const [categoryHandlers, setCategoryHandlers] = useState<string[]>([]);
  const categoryHandler = (category: string[]) => {
    setCategoryHandlers(category);
  };

  const [productsArea, setProductsArea] = useState<Product[]>([]);
  let filteredProducts: Product[] = [];
  useEffect(() => {
    if (categoryHandlers.length === 0) {
      setProductsArea(products);
      return;
    }
    categoryHandlers.forEach((category) => {
      const categoryProducts: Product[] = products.filter(
        (product) => product.Category === category
      );

      categoryProducts.forEach((product) => {
        filteredProducts.push({
          Product_id: product.Product_id,
          Product: product.Product,
          Photo: product.Photo,
          Price: product.Price,
          Category: product.Category,
        });
      });
    });
    setProductsArea(filteredProducts);
  }, [categoryHandlers]);

  return (
    <div className={style.app}>
      <Header />
      <div className={style.flexContainer}>
        <div className={style.flex}>
          <Information />
        </div>
        <div className={style.gridContainer}>
          <SideBar categoryHandler={categoryHandler} />
          <ProductList productList={productsArea} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
