import { useEffect, useState } from "react";
import style from "./Basket.module.css";
import CartIcon from "../Card/CartIcon";
import { orderList } from "../../Data/orderList";
import CartListModal from "../OrderModel/CartListModal";
type Props = {};
const Basket = (props: Props) => {
  const [list, setList] = useState<boolean>(false);
  const listOrders = () => {
    setList(!list);
  };
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    const totalPrice = orderList.reduce((accumulator, product) => {
      return accumulator + product.product_price;
    }, 0);

    setTotalPrice(totalPrice);
  }, []);
  return (
    <>
      {list && <CartListModal onClick={listOrders} />}
      <button className={style.cart} onClick={listOrders}>
        <span className={style.iconHolder}>
          <CartIcon className={style.icon} />
        </span>
        <span className={style.cartProduct}>
          {orderList.length} product / {totalPrice} ₺
        </span>
      </button>
    </>
  );
};

export default Basket;
