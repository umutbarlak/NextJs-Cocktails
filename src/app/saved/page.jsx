import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import SavedItems from "./savedItems";

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <h2>Saved Coctails</h2>

        <SavedItems />

        <section className="bottom">
          <Link href={"/"}>
            <GoArrowLeft />
            <span>Continue Search</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
