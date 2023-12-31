import React, { useEffect, useState } from "react";
import style from "./HomePage.module.css";
import ProductList from "../../Components/Product/ProductList";
import SideBar from "../../Components/SideBar/SideBar";
import Information from "../../Components/Ui/Information";
import { products } from "../../Data/products";
import { useToggleStore } from "../../states/clearState";
interface Product {
  Product_id: number;
  Product: string;
  Photo: string;
  Price: number;
  Category: string;
}
type Props = {};

const ProductsPage: React.FC<Props> = () => {
  const { closeToggle } = useToggleStore((state: any) => ({
    closeToggle: state.closeToggle,
    openToggle: state.openToggle,
  }));
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
  const [sliderPrices, setSliderPrices] = useState<number[]>([
    Math.min(1),
    Math.max(300),
  ]);
  const sliderPricesHolder = (values: number[]) => {
    setSliderPrices(values);
  };

  useEffect(() => {
    if (categoryHandlers.length === 0) {
      const newProducts: Product[] = products.filter((product) => {
        return (
          product.Price >= sliderPrices[0] && product.Price <= sliderPrices[1]
        );
      });
      setProductsArea(newProducts);
      setPricesArea(products.map((product) => product.Price));
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
      setPricesArea(prices);
      setProductsArea(filteredProducts);
    }
  }, [categoryHandlers, sliderPrices]);

  const clearAllFilters = () => {
    setPricesArea([1, 300]);
    setSliderPrices([1, 300]);
    setProductsArea(products);
    closeToggle();
  };

  return (
    <section className={style.flexContainer}>
      <div className={style.flex}>
        <Information />
      </div>
      <div className={style.gridContainer}>
        <SideBar
          clearAllFilters={clearAllFilters}
          onPriceHolder={sliderPricesHolder}
          pricesList={pricesArea}
          categoryHandler={categoryHandler}
        />
        <ProductList productList={productsArea} />
      </div>
    </section>
  );
};

export default ProductsPage;
