import Basket from "./(components)/basket";
import Filter from "./(components)/filter";
import List from "./(components)/list";

export default async function Home() {
  return (
    <main className="main-page">
      <Filter />

      <div className="container">
        <div className="wrapper">
          <List />
        </div>

        <Basket />
      </div>
    </main>
  );
}
