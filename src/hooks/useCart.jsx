import { useContext } from "react";
import { CartContext } from "./CartProvider";

const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
export default useCart;
