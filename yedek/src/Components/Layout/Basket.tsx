import React, { useState } from "react";
import style from "./Basket.module.css";
import CartIcon from "../Card/CartIcon";
import { orderList } from "../../Data/orderList";
import CartListModal from "../OrderModel/CartListModal";
type Props = {};
const Basket = (props: Props) => {
  let sum: number = 0;
  orderList.map((order) => {
    sum+=order.total_price
  });
  const [list, setList] = useState<boolean>(false);
  const listOrders = () => {
    setList(!list);
  };
  return (
    <>
      {list && <CartListModal onClick={listOrders} />}
      <button className={style.cart} onClick={listOrders}>
        <span className={style.iconHolder}>
          <CartIcon className={style.icon} />
        </span>
        <span className={style.cartProduct}>
          {orderList.length} product / 0.00 ₺
        </span>
      </button>
    </>
  );
};

export default Basket;
