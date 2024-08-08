import Image from "next/image";
import AddButton from "./addButton";

const Card = ({ item }) => {
  return (
    <div className="card">
      <h4>{item.strDrink}</h4>
      <h2>{item.strCategory}</h2>

      <Image src={"/coctail.jpg"} width={200} height={200} alt="selam" />

      <AddButton item={item} />
    </div>
  );
};

export default Card;
