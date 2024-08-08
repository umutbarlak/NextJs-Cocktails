import Link from "next/link";
import BasketButton from "./basketButton";

const Header = async () => {
  return (
    <header>
      <div className="container">
        <Link href={"/"} className="logo">
          <h1>The Coctail App</h1>
          <p>Ümüt Barlak</p>
        </Link>

        <BasketButton />
      </div>
    </header>
  );
};

export default Header;
