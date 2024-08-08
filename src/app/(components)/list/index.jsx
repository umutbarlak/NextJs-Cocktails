"use client";

import { useEffect, useState } from "react";
import { searchCoctails } from "../../utils/api";
import Card from "../card";
import { useSearchParams } from "next/navigation";

const List = () => {
  const [drinks, setDrinks] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    searchCoctails(query)
      .then((data) => setDrinks(data.drinks))
      .catch((err) => console.log("err", err));
  }, [query]);

  console.log(query);
  console.log(drinks);

  return drinks?.map((item) => <Card key={item.idDrink} item={item} />);
};

export default List;
