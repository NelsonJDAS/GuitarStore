import { useState, useEffect, useMemo } from "react";

export const useCart = () => {
  const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [load, setLoad] = useState(false);
  const [cart, setCart] = useState(localStorageCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const AddToCart = (item) => {
    console.log(item);
    console.log(cart);
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExist >= 0) {
      const ItemCart = [...cart];
      ItemCart[itemExist].quantity++;
      setCart(ItemCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  };

  const RemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id != id));
  };

  const Incrementar = (id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < 5) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  };

  const Disminuir = (id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  };
  const VaciarCarrito = () => {
    setCart([]);
  };

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.precio * item.quantity, 0),
    [cart]
  );
  return {
    load,
    cart,
    setCart,
    setLoad,
    RemoveFromCart,
    Incrementar,
    Disminuir,
    VaciarCarrito,
    AddToCart,
    isEmpty,
    cartTotal
  };
};
