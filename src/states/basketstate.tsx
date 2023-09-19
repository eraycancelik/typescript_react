import { create } from "zustand";
interface OrderDetails {
  product_id: number;
  product_name: string;
  product_photo: string;
  product_price: number;
  product_quantity: number;
  total_price: number;
}
type OrderListStore = {
  orderList: OrderDetails[];
  addToOrderList: (item: OrderDetails) => void;
  removeFromOrderList: (item: OrderDetails) => void;
  calculateTotalPrice: () => number;
  increaseOrderQuantity: (productId: number, quantity: number) => void;
  decreaseOrderQuantity: (productId: number, quantity: number) => void;
  clearOrderList: () => void;
};

export const useOrderListStore = create<OrderListStore>((set) => ({
  orderList: [],
  removeFromOrderList: (item) =>
    set((state) => ({
      orderList: state.orderList.filter((orderItem) => orderItem !== item),
    })),
  increaseOrderQuantity: (productId, quantity) =>
    set((state) => {
      const updatedOrderList = state.orderList.map((orderItem) => {
        if (productId === orderItem.product_id) {
          orderItem.product_quantity = quantity;
          orderItem.total_price += orderItem.product_price;
        }
        return orderItem;
      });
      return { orderList: updatedOrderList };
    }),
  decreaseOrderQuantity: (productId) =>
    set((state) => {
      const updatedOrderList = state.orderList.map((orderItem) => {
        if (orderItem.product_id === productId) {
          orderItem.product_quantity -= 1;
          orderItem.total_price -= orderItem.product_price;
        }
        return orderItem;
      });
      return { orderList: updatedOrderList };
    }),
  addToOrderList: (item) =>
    set((state) => {
      const existingItem = state.orderList.find(
        (orderItem) => orderItem.product_id === item.product_id
      );
      if (existingItem) {
        existingItem.product_quantity += item.product_quantity;
        existingItem.total_price += item.total_price;
        return { orderList: [...state.orderList] };
      } else {
        return { orderList: [...state.orderList, item] };
      }
    }),
  calculateTotalPrice: () =>
    useOrderListStore
      .getState()
      .orderList.reduce(
        (total: any, orderItem: { total_price: any }) =>
          total + orderItem.total_price,
        0
      ),
  clearOrderList: () =>
    set((state) => {
      return { orderList: [] };
    }),
}));
