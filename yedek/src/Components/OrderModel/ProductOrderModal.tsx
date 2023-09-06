import React from "react";
import ReactDOM from "react-dom";
import style from "./ProductOrderModal.module.css";
import ListOrder from "./ListOrder";
type Props = {
  id: number;
  order: boolean;
  setOrder: (order: boolean) => void;
  quantity: number;
  product: string;
  photo: string;
  price: number;
  onClick: () => void;
};
type BackdropProps = {
  className: string;
  onClick: () => void;
};

type ModalOverlayProps = {
  id: number;
  order: boolean;
  setOrder: (order: boolean) => void;
  quantity: number;
  product: string;
  photo: string;
  price: number;
  onClick: () => void;
};

const Backdrop = (props: BackdropProps) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <ListOrder
      id={props.id}
      order={props.order}
      setOrder={props.setOrder}
      className={style.modal}
      product={props.product}
      photo={props.photo}
      price={props.price}
      quantity={props.quantity}
      onClick={props.onClick}
    />
  );
};
const ProductOrderModal = (props: Props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop className={style.backdrop} onClick={props.onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          id={props.id}
          order={props.order}
          setOrder={props.setOrder}
          quantity={props.quantity}
          product={props.product}
          photo={props.photo}
          price={props.price}
          onClick={props.onClick}
        />,
        document.getElementById("modal-root")!
      )}
    </React.Fragment>
  );
};

export default ProductOrderModal;
