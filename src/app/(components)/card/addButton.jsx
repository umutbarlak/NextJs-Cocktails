"use client";
import { useState } from "react";
import useBasketContext from "../../context";
import Modal from "../modal";

const AddButton = ({ item }) => {
  const [show, setShow] = useState(false);
  const { basket, addToBasket, removeFromBasket } = useBasketContext();

  const found = basket.find((i) => i.idDrink === item.idDrink);

  const toggle = () => {
    if (found) {
      removeFromBasket(item.idDrink);
    } else {
      addToBasket(item);
    }
  };

  return (
    <>
      <button onClick={() => setShow(true)}>
        {found ? "Remove From Basket" : "Add To Baket"}
      </button>

      <Modal
        show={show}
        onConfirm={toggle}
        onClose={() => setShow(false)}
        theme={found ? "del" : "add"}
      />
    </>
  );
};

export default AddButton;
