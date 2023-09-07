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

type Props = {};

const App: React.FC<Props> = () => {
  const [categoryHandlers, setCategoryHandlers] = useState<string[]>([]);
  const [productsArea, setProductsArea] = useState<Product[]>(products);
  const [pricesArea, setPricesArea] = useState<number[]>(
    products.map((product) => product.Price)
  );
  let filteredProducts: Product[] = [];
  let prices: number[] = [];
  
  const categoryHandler = (category: string[]) => {
    setCategoryHandlers(category);
  };

  useEffect(() => {
    if (categoryHandlers.length === 0) {
      setProductsArea(products);
      setPricesArea(products.map((product) => product.Price));
      return;
    } else {
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
          prices.push(product.Price);
        });
      });

      setProductsArea(filteredProducts);
      setPricesArea(prices);
    }
  }, [categoryHandlers]);

  return (
    <div className={style.app}>
      <Header />
      <div className={style.flexContainer}>
        <div className={style.flex}>
          <Information />
        </div>
        <div className={style.gridContainer}>
          <SideBar pricesList={pricesArea} categoryHandler={categoryHandler} />
          <ProductList productList={productsArea} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
