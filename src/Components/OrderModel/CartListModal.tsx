import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import style from "./CartListModal.module.css";
import ModelOverlayList from "./ModelOverlayList";
import Button from "../Ui/Button";
import { orderList, removeItem } from "../../Data/orderList";
import { useOrderListStore } from "../../states/basketstate";
import BuyButton from "../Ui/BuyButton";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import { ButtonGroup, useDisclosure } from "@chakra-ui/react";
import {
  Button as ChakraButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { clear } from "console";
import { stat } from "fs";
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
  const [rendered, setRendered] = useState(orderList);
  let id: number = 0;
  let products: string = "";
  let photos: string = "";
  let prices: number = 0;
  let quantitys: number = 0;

  const remove = (id: number) => {
    removeItem(id, rendered, setRendered);
  };
  const somea = () => {
    props.onClick();
  };
  let renderedItems: any = (
    <tr className={style.empty}>
      <td className={style.conte}>cart is empty</td>
    </tr>
  );
  const Basket = useOrderListStore((state: any) => state.orderList);
  const priceSum = useOrderListStore((state: any) => state.calculateTotalPrice);
  let ButtonArea = <Button message={"continue to shopping"} onClick={somea} />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { clearOrderList } = useOrderListStore();
  const clearCart = () => {
    clearOrderList();
    onClose();
    props.onClick();
  };
  if (Basket.length !== 0) {
    ButtonArea = (
      <div className={style.result}>
        <div className={style.priceSumArea}>
          <div className={style.priceTitle}>Total Price:</div>
          <div className={style.priceNumber}>
            {priceSum()} <span>₺</span>
          </div>
        </div>
        <div className={style.buttons}>
          <Button message={"continue to shopping"} onClick={somea} />
          <div className={style.ora}>
            <DeleteIcon
              onClick={onOpen}
              _hover={{ color: "red.500" }}
              fontSize={"35px"}
              border={"1px solid"}
              borderRadius={"50%"}
              padding={"5px"}
              color={"white"}
              cursor={"pointer"}
              mr={"15px"}
            />
            <Link
              target="_blank"
              to="https://www.savethestudent.org/make-money/10-quick-cash-injections.html"
            >
              <BuyButton />
            </Link>
          </div>
        </div>
      </div>
    );
    renderedItems = Basket.map(
      (
        order: {
          product_id: number;
          product_name: string;
          product_photo: string;
          product_price: number;
          product_quantity: number;
        },
        index: number
      ) => (
        (id = order.product_id),
        (products = order.product_name),
        (photos = order.product_photo),
        (prices = order.product_price),
        (quantitys = order.product_quantity),
        (
          <ModelOverlayList
            remove={remove}
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
  }

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
      {ButtonArea}
      <Modal
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Clearing Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Are you sure you want to clear your cart? </p>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <ChakraButton
                colorScheme="teal"
                variant="outline"
                mr={3}
                onClick={() => {
                  clearCart();
                }}
              >
                Clear Cart
              </ChakraButton>
              <ChakraButton onClick={onClose} variant="ghost">
                Cancel
              </ChakraButton>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

// from here, the code will execute by the CartListModal component
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
