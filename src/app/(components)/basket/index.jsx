"use client";

import { useState } from "react";
import useBasketContext from "../../context";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../modal";

const Basket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { basket, removeFromBasket, saveBasket } = useBasketContext();

  return (
    <div className="basket">
      <div className="buttons">
        <button className="show-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide Basket" : "Show Basket"}
        </button>

        <button onClick={saveBasket} className="save-btn">
          Save Coctails
        </button>
      </div>

      <div className={`list ${isOpen ? "show" : ""}`}>
        {basket.map((item) => (
          <div key={item.idDrink}>
            <div className="item">
              <h3>{item.strDrink}</h3>
              <h3>{item.strCategory}</h3>
              <button onClick={() => setShow(true)}>
                <FaTrashAlt />
              </button>
            </div>

            <Modal
              show={show}
              onConfirm={() => removeFromBasket(item.idDrink)}
              onClose={() => setShow(false)}
              theme="del"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
