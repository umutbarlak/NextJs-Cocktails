"use client";
import Image from "next/image";
import useBasketContext from "../context";

const SavedItems = () => {
  const { savedBasket, removeSaved } = useBasketContext();

  return (
    <div className="wrapper">
      {savedBasket.length === 0 ? (
        <p>Nothing saved yet</p>
      ) : (
        savedBasket.map((item) => (
          <div key={item.idDrink} className="card">
            <h4>{item.strDrink}</h4>
            <h2>{item.strCategory}</h2>

            <Image src={"/coctail.jpg"} width={200} height={200} alt="selam" />

            <button onClick={() => removeSaved(item.idDrink)}>
              Remove From Saved
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedItems;
