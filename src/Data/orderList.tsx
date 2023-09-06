interface OrderDetails {
  product_id: number;
  product_name: string;
  product_photo: string;
  product_price: number;
  product_quantity: number;
  total_price: number;
}
const orderList: OrderDetails[] = [];
const addItem = (order: OrderDetails) => {
  orderList.push(order);
};
const removeItem = (
  id: number,
  rendered: OrderDetails[],
  setRendered: (rendered: OrderDetails[]) => void
) => {
  const newOrderList = [...rendered];
  newOrderList.splice(id, 1);
  setRendered(newOrderList);
};
export { orderList, removeItem, addItem };
