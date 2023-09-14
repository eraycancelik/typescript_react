import React, { useState, ChangeEvent } from "react";
import style from "./OrderTableQuantity.module.css";
import { useOrderListStore } from "../../states/basketstate";
type Props = {
  id: number;
  className: string;
  quantity: number;
  quantityHolder: (price: number) => void;
};
const OrderTableQuantity = (props: Props) => {
  const { orderList, increaseOrderQuantity, decreaseOrderQuantity } =
    useOrderListStore();

  const Basket = useOrderListStore.getState().orderList;
  const [quantityNew, setQuantity] = useState<number>(props.quantity);
  const increaseQuantity = () => {
    console.log(props.id);
    setQuantity((prevQuantity) => prevQuantity + 1);
    if (orderList[props.id]) {
      increaseOrderQuantity(props.id + 1, quantityNew + 1);
      orderList[props.id].product_quantity = quantityNew + 1;
      orderList[props.id].total_price =
        orderList[props.id].product_price * (quantityNew + 1);
    } else {
      setQuantity(quantityNew + 1);
    }
    props.quantityHolder(quantityNew + 1);
  };
  const decreaseQuantity = () => {
    if (quantityNew > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      if (orderList[props.id]) {
        orderList[props.id].product_quantity = quantityNew - 1;
        orderList[props.id].total_price =
          orderList[props.id].product_price * (quantityNew - 1);
        decreaseOrderQuantity(props.id + 1, quantityNew - 1);
      } else {
        setQuantity(quantityNew - 1);
        decreaseOrderQuantity(props.id + 1, quantityNew - 1);
      }
      props.quantityHolder(quantityNew - 1);
    }
  };
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    let quantityNew = parseInt(event.target.value, 10);
    setQuantity(quantityNew);
    orderList[props.id].product_quantity = quantityNew;
    orderList[props.id].total_price =
      orderList[props.id].product_price * quantityNew;
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
