interface OrderDetails {
  product_id: number;
  product_name: string;
  product_photo: string;
  product_price: number;
  product_quantity: number;
  total_price: number;
}

export const cart: OrderDetails[] = [];
