import style from "./ListOrder.module.css";
import ModelOverlayList from "./ModelOverlayList";
import Button from "../Ui/Button";
import { useState } from "react";
import { orderList, addItem } from "../../Data/orderList";
type Props = {
  id: number;
  order: boolean;
  setOrder: (order: boolean) => void;
  className: string;
  product: string;
  photo: string;
  price: number;
  quantity: number;
  onClick: () => void;
};
interface OrderDetails {
  product_id: number;
  product_name: string;
  product_photo: string;
  product_price: number;
  product_quantity: number;
  total_price: number;
}

const ListOrder = (props: Props) => {
  const [quantityNew, setQuantity] = useState<number>(props.quantity);
  const [totalPrice, setTotalPrice] = useState<number>(
    props.price * props.quantity
  );
  const newQuantaHolder = (quanta: number) => {
    setQuantity(quanta);
    setTotalPrice(quanta * props.price);
  };
  async function getOrder() {
    props.setOrder(!props.order);
    const orderDetails: OrderDetails = {
      product_id: props.id,
      product_name: props.product,
      product_photo: props.photo,
      product_price: props.price,
      product_quantity: quantityNew,
      total_price: totalPrice,
    };
    if (
      orderList.filter((order) => order.product_id === props.id).length === 0
    ) {
      console.log("new item added");
      addItem(orderDetails);
    } else {
      orderList.map((order) => {
        if (orderDetails.product_id === order.product_id) {
          order.product_quantity += orderDetails.product_quantity;
          order.total_price += orderDetails.total_price;
        }
      });
    }
  }
  return (
    <div className={props.className}>
      <table className={style.gridContainer}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ModelOverlayList
            id={props.id}
            onQuantityHolder={newQuantaHolder}
            className={style.modal}
            product={props.product}
            photo={props.photo}
            price={props.price}
            quantity={props.quantity}
            onClick={props.onClick}
          />
        </tbody>
      </table>
      <Button message={"continue to shopping"} onClick={getOrder} />
    </div>
  );
};

export default ListOrder;
