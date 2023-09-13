import { create } from "zustand";
import { products } from "../Data/products";

type useSliderStoreType = {
  values: number[];
  setValues: (values: number[]) => void;
};
let prices: number[] = [];
const productsArea = products.map((product) => {
  prices.push(product.Price);
});

export const useSliderStore = create<useSliderStoreType>((set) => ({
  values: [Math.min(...prices), Math.max(...prices)],
  setValues: (values) => set({ values }),
  prices: prices,
}));
