import React, { useState, ChangeEvent, FC } from "react";
import style from "./QuantitySelector.module.css";
type Props = {
  product: string;
  photo: string;
  price: number;
  onClick: () => void;
  onQuantityChange: (quantity: number) => void;
};
const QuantitySelector: FC<Props> = (props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    props.onQuantityChange(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      props.onQuantityChange(quantity - 1);
    }
  };
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10);
    setQuantity(quantity);
    props.onQuantityChange(quantity);
  };
  return (
    <div className={style.addBasket}>
      <div className={style.quantity}>
        <button className={style.quantityButton} onClick={decreaseQuantity}>
          -
        </button>
        <input
          className={style.quantityHolder}
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button className={style.quantityButton} onClick={increaseQuantity}>
          +
        </button>
      </div>
      <button onClick={props.onClick} className={style.addBasketButton}>
        Add to Basket
      </button>
    </div>
  );
};

export default QuantitySelector;
