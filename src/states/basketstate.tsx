import { create } from "zustand";
import { orderList } from "../Data/orderList";
const useBasketStore = create((set) => ({
  totalPrice:0,
  increaseTotalPrice: (price: number) => {
    set((state:any) => ({ totalPrice: state.totalPrice + price }));
  }
}));
