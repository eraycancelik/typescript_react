import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import style from "./CartListModal.module.css";
import ModelOverlayList from "./ModelOverlayList";
import Button from "../Ui/Button";
import { orderList } from "../../Data/orderList";
// these are the props that will be used in the CartListModal component
type Props = {
  onClick: () => void;
};
type BackdropProps = {
  onClick: () => void;
};
type CartModalOverlayProps = {
  onClick: () => void;
  className: string;
};
// ------------------------------------------------this is the Backdrop component----------------------------------------------
const Backdrop = (props: BackdropProps) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
};
// ----------------------------------------------this is the CartListModal component----------------------------------------------
const CartModalOverlay = (props: CartModalOverlayProps) => {
  let id: number = 0;
  let products: string = "";
  let photos: string = "";
  let prices: number = 0;
  let quantitys: number = 0;

  const somea = () => {
    console.log(orderList, id);
  };
  const renderedItems = orderList.map(
    (order, index) => (
      (id = order.product_id),
      (products = order.product_name),
      (photos = order.product_photo),
      (prices = order.product_price),
      (quantitys = order.product_quantity),
      (
        <ModelOverlayList
          id={index}
          key={index}
          onQuantityHolder={() => {}}
          className={style.sa}
          product={products}
          photo={photos}
          price={prices}
          quantity={quantitys}
          onClick={props.onClick}
        />
      )
    )
  );

  //-------this is the renderedItems variable--------

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
        <tbody>{renderedItems}</tbody>
      </table>
      <Button message={"continue to shopping"} onClick={somea} />
    </div>
  );
};

// from here, the code will execute via the CartListModal component
const CartListModal = (props: Props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <CartModalOverlay onClick={props.onClick} className={style.modal} />,
        document.getElementById("modal-root")!
      )}
    </Fragment>
  );
};

export default CartListModal;
