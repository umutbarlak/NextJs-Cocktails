"use client";
import Link from "next/link";
import { FaRegSave } from "react-icons/fa";
import useBasketContext from "../../context";

const BasketButton = () => {
  const { savedBasket } = useBasketContext();

  return (
    <Link href={"/saved"} className="basket">
      <FaRegSave />
      <span>{savedBasket.length}</span>
    </Link>
  );
};

export default BasketButton;
