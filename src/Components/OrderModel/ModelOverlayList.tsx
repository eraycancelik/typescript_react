import { useEffect, useState } from "react";
import style from "./ModelOverlayList.module.css";
import OrderTableQuantity from "../Quantity/OrderTableQuantity";
import { useOrderListStore } from "../../states/basketstate";
type Props = {
  remove?: (id: number) => void;
  id: number;
  className: string;
  product: string;
  photo: string;
  price: number;
  quantity: number;
  onClick: () => void;
  onQuantityHolder: (quantity: number) => void;
};
interface OrderDetails {
  product_id: number;
  product_name: string;
  product_photo: string;
  product_price: number;
  product_quantity: number;
  total_price: number;
}
const ModelOverlayList = (props: Props) => {
  const { orderList, removeFromOrderList } = useOrderListStore();

  const [quantityNew, setQuantity] = useState<number>(props.quantity);
  const onQuantityHolder = (quantity: number) => {
    setQuantity(quantity);
  };
  useEffect(() => {
    props.onQuantityHolder(quantityNew);
  }, [quantityNew]);

  const deleteItem = () => {
    removeFromOrderList(orderList[props.id]);
  };

  return (
    <tr>
      <td className={style.photoHolder}>
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
        <button className={style.deleteButton} onClick={deleteItem}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default ModelOverlayList;
