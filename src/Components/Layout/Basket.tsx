import { useState } from "react";
import style from "./Basket.module.css";
import CartIcon from "../Card/CartIcon";
import CartListModal from "../OrderModel/CartListModal";
import { useOrderListStore } from "../../states/basketstate";
import { Link } from "react-router-dom";
type Props = {};
const Basket = (props: Props) => {
  const total = useOrderListStore.getState().calculateTotalPrice();
  const orderList = useOrderListStore((state) => state.orderList);

  const [list, setList] = useState<boolean>(false);
  const listOrders = () => {
    setList(!list);
  };
  return (
    <>
      {list && <CartListModal onClick={listOrders} />}
      <button className={style.cart} onClick={listOrders}>
        <Link to="/profile">
          <span className={style.iconHolder}>
            <CartIcon className={style.icon} />
          </span>
        </Link>
        <span className={style.cartProduct}>
          {orderList.length} product / {total} ₺
        </span>
      </button>
    </>
  );
};
export default Basket;
