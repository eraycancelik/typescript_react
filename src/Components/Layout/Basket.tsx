import { useState } from "react";
import style from "./Basket.module.css";
import CartIcon from "../Card/CartIcon";
import CartListModal from "../OrderModel/CartListModal";
import { useOrderListStore } from "../../states/basketstate";
type Props = {};
const orderList = (props: Props) => {
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
        <span className={style.iconHolder}>
          <CartIcon className={style.icon} />
        </span>
        <span className={style.cartProduct}>
          {orderList.length} product / {total} ₺
        </span>
      </button>
    </>
  );
};
export default orderList;
