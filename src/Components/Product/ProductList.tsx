import Product from "./Product";
import style from "./ProductList.module.css";
type Props = {
  productList: Array<{
    Product_id: number;
    Product: string;
    Photo: string;
    Price: number;
    Category: string;
  }>;
};
const ProductList = (props: Props) => {
  return (
    <div className={style.liste}>
      {props.productList.map((product) => (
        <Product
          key={product.Product}
          Id={product.Product_id}
          Product={product.Product}
          Photo={product.Photo}
          Price={product.Price}
          Category={product.Category}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
