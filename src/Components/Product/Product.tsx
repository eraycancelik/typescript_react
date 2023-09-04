import QuantitySelector from "../Quantity/QuantitySelector";
import style from "./Product.module.css";
import { useState } from "react";
import ProductOrderModal from "../OrderModel/ProductOrderModal";
type Props = {
  Id: number;
  Product: string;
  Photo: string;
  Price: number;
  Category: string;
};
const Product = (props: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [order, setOrder] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const productOrderHandler = () => {
    setOrder(!order);
  };
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
  return (
    <>
      {order && (
        <ProductOrderModal
          order={order}
          id={props.Id}
          setOrder={setOrder}
          quantity={quantity}
          product={props.Product}
          photo={props.Photo}
          price={props.Price}
          onClick={productOrderHandler}
        />
      )}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={style.cardHolder}
      >
        <div className={style.card}>
          <div className={style.photoHolder}>
            <img className={style.photo} src={props.Photo} alt={props.Photo} />
          </div>
          <div className={style.info}>
            <h3 className={style.productName}>{props.Product}</h3>
            <p className={style.category}>{props.Category}</p>
            {!isHovered ? (
              <p className={style.price}>
                {props.Price} <span className={style.tl}>TL</span>
              </p>
            ) : (
              <QuantitySelector
                onClick={productOrderHandler}
                product={props.Product}
                photo={props.Photo}
                price={props.Price}
                onQuantityChange={handleQuantityChange}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
