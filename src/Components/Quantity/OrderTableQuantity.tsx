import React, { useState, ChangeEvent } from "react";
import style from "./OrderTableQuantity.module.css";
import { orderList } from "../../Data/orderList";
type Props = {
  id: number;
  className: string;
  quantity: number;
  quantityHolder: (price: number) => void;
};
const OrderTableQuantity = (props: Props) => {
  const [quantityNew, setQuantity] = useState<number>(props.quantity);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setQuantity(quantityNew + 1);
    props.quantityHolder(quantityNew + 1);
    orderList[props.id].product_quantity = quantityNew + 1;
  };
  const decreaseQuantity = () => {
    if (quantityNew > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setQuantity(quantityNew - 1);
      orderList[props.id].product_quantity = quantityNew - 1;
      props.quantityHolder(quantityNew - 1);
    }
  };
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    let quantityNew = parseInt(event.target.value, 10);
    setQuantity(quantityNew);
    orderList[props.id].product_quantity = quantityNew + 1;
    props.quantityHolder(quantityNew);
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
          value={quantityNew}
          onChange={handleQuantityChange}
        />
        <button className={style.quantityButton} onClick={increaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default OrderTableQuantity;
