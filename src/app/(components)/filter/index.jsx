"use client";
import { CiSearch } from "react-icons/ci";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const params = useSearchParams();
  const { replace } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    replace(`/?query=${text.trim()}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="search for cocktail.."
          defaultValue={params.get("query") || ""}
        />
        <button>
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default Filter;
