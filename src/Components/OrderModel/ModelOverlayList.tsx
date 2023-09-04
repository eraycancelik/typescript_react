import React, { useEffect, useState } from "react";
import style from "./ModelOverlayList.module.css";
import OrderTableQuantity from "../Quantity/OrderTableQuantity";
import { orderList } from "../../Data/orderList";
type Props = {
  id: number;
  className: string;
  product: string;
  photo: string;
  price: number;
  quantity: number;
  onClick: () => void;
  onQuantityHolder: (quantity: number) => void;
};
const ModelOverlayList = (props: Props) => {
  const [quantityNew, setQuantity] = useState<number>(props.quantity);
  const onQuantityHolder = (quantity: number) => {
    setQuantity(quantity);
  };
  useEffect(() => {
    props.onQuantityHolder(quantityNew);
  }, [quantityNew]);

  return (
    <tr>
      <td>
        <img src={props.photo} alt="product" className={style.gridItem} />
      </td>
      <td>{props.product}</td>
      <td className={style.quantityHolder}>
        <OrderTableQuantity
          id={props.id}
          quantityHolder={onQuantityHolder}
          className={style.quantity}
          quantity={props.quantity}
        />
      </td>
      <td>{props.price} TL</td>
      <td>{quantityNew * props.price} TL</td>
      <td>
        <button className={style.deleteButton} onClick={props.onClick}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default ModelOverlayList;
