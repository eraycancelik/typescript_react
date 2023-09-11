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
  const sliderPricesHolder = (values: number[]) => {
    setSliderPrices(values);
  };
  const [sliderPrices, setSliderPrices] = useState<number[]>([
    Math.min(1),
    Math.max(300),
  ]);
  useEffect(() => {
    if (categoryHandlers.length === 0) {
      const newProducts: Product[] = products.filter((product) => {
        return (
          product.Price >= sliderPrices[0] && product.Price <= sliderPrices[1]
        );
      });
      setProductsArea(newProducts);
      setPricesArea(products.map((product) => product.Price));
      return;
    } else {
      const filteredProducts: Product[] = [];
      const prices: number[] = [];

      categoryHandlers.forEach((category) => {
        const categoryProducts: Product[] = products.filter(
          (product) =>
            product.Category === category &&
            product.Price >= sliderPrices[0] &&
            product.Price <= sliderPrices[1]
        );
        filteredProducts.push(...categoryProducts);
        prices.push(...categoryProducts.map((product) => product.Price));
      });

      setProductsArea(filteredProducts);
      setPricesArea(prices);
    }
  }, [categoryHandlers, sliderPrices]);

  return (
    <div className={style.app}>
      <Header />
      <div className={style.flexContainer}>
        <div className={style.flex}>
          <Information />
        </div>
        <div className={style.gridContainer}>
          <SideBar
            onPriceHolder={sliderPricesHolder}
            pricesList={pricesArea}
            categoryHandler={categoryHandler}
          />
          <ProductList productList={productsArea} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
