"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [savedBasket, setSavedBasket] = useLocalStorage("basket", []);

  const addToBasket = (newProduct) => {
    const found = basket.find((i) => i.idDrink === newProduct.idDrink);

    if (!found) {
      setBasket([...basket, newProduct]);

      toast.success("Coctail added to basket");
    }
  };

  const removeFromBasket = (delete_id) => {
    const filtred = basket.filter((i) => i.idDrink !== delete_id);

    setBasket(filtred);

    toast.error("Coctail removed from basket");
  };

  const saveBasket = () => {
    if (basket.length === 0) {
      return toast.info("Nothing to save");
    }

    setSavedBasket((prevSavedBasket) => {
      const newItems = basket.filter(
        (basketItem) =>
          !prevSavedBasket.some(
            (savedItem) => savedItem.idDrink === basketItem.idDrink
          )
      );

      return [...prevSavedBasket, ...newItems];
    });

    toast.success("Coctails successfully saved");
  };

  const removeSaved = (delete_id) => {
    const filtred = savedBasket.filter((i) => i.idDrink !== delete_id);

    setSavedBasket(filtred);

    toast.error("Coctail removed from basket");
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        savedBasket,
        saveBasket,
        removeSaved,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export default function useBasketContext() {
  return useContext(BasketContext);
}
