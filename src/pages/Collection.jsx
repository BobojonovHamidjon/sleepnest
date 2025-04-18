import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCard, removeCard } from "../Action";

const Collection = () => {
  const { t, i18n } = useTranslation();
  const categories = [
    { id: 1, name: t("colect.All") },
    { id: 2, name: t("colect.Winter") },
    { id: 4, name: t("colect.Autumn") },
    { id: 3, name: t("colect.Summer") },
  ];
  const [selectedId, setSelectedId] = useState(1); 
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      id: 1,
      name: t("collection.1"),
      image: "Images/winter/1.jpg",
      category: t("category.w"),
    },
    {
      id: 2,
      name: t("collection.2"),
      image: "Images/winter/2.jpg",
      category: t("category.w"),
    },
    {
      id: 3,
      name: t("collection.3"),
      image: "Images/winter/3.jpg",
      category: t("category.w"),
    },
    {
      id: 4,
      name: t("collection.4"),
      image: "Images/winter/4.jpg",
      category: t("category.w"),
    },
    {
      id: 5,
      name: t("collection.5"),
      image: "Images/winter/5.jpg",
      category: t("category.w"),
    },
    {
      id: 6,
      name: t("collection.6"),
      image: "Images/winter/6.jpg",
      category: t("category.w"),
    },
    {
      id: 7,
      name: t("collection.7"),
      image: "Images/winter/7.jpg",
      category: t("category.w"),
    },
    {
      id: 8,
      name: t("collection.8"),
      image: "Images/winter/8.jpg",
      category: t("category.w"),
    },
    {
      id: 9,
      name: t("collection.9"),
      image: "Images/winter/9.jpg",
      category: t("category.w"),
    },
    {
      id: 10,
      name: t("collection.10"),
      image: "Images/winter/10.jpg",
      category: t("category.w"),
    },
    {
      id: 11,
      name: t("autumn.1"),
      image: "Images/autm/1.jpg",
      category: t("category.a"),
    },
    {
      id: 12,
      name: t("autumn.2"),
      image: "Images/autm/2.jpg",
      category: t("category.a"),
    },
    {
      id: 13,
      name: t("autumn.3"),
      image: "Images/autm/3.jpg",
      category: t("category.a"),
    },
    {
      id: 14,
      name: t("autumn.4"),
      image: "Images/autm/4.jpg",
      category: t("category.a"),
    },
    {
      id: 15,
      name: t("autumn.5"),
      image: "Images/autm/5.jpg",
      category: t("category.a"),
    },
    {
      id: 16,
      name: t("autumn.6"),
      image: "Images/autm/6.jpg",
      category: t("category.a"),
    },
    {
      id: 17,
      name: t("autumn.7"),
      image: "Images/autm/7.jpg",
      category: t("category.a"),
    },
    {
      id: 18,
      name: t("autumn.8"),
      image: "Images/autm/8.jpg",
      category: t("category.a"),
    },
    {
      id: 19,
      name: t("autumn.9"),
      image: "Images/autm/9.jpg",
      category: t("category.a"),
    },
    {
      id: 20,
      name: t("autumn.10"),
      image: "Images/autm/10.jpg",
      category: t("category.a"),
    },
    {
      id: 23,
      name: t("summer.3"),
      image: "Images/summer/3.jpg",
      category: t("category.s"),
    },
    {
      id: 22,
      name: t("summer.2"),
      image: "Images/summer/2.jpg",
      category: t("category.s"),
    },
    {
      id: 24,
      name: t("summer.4"),
      image: "Images/summer/4.jpg",
      category: t("category.s"),
    },
    {
      id: 21,
      name: t("summer.1"),
      image: "Images/summer/1.jpg",
      category: t("category.s"),
    },
    {
      id: 25,
      name: t("summer.5"),
      image: "Images/summer/5.jpg",
      category: t("category.s"),
    },
    {
      id: 26,
      name: t("summer.6"),
      image: "Images/summer/6.jpg",
      category: t("category.s"),
    },
    {
      id: 27,
      name: t("summer.7"),
      image: "Images/summer/7.jpg",
      category: t("category.s"),
    },
    {
      id: 28,
      name: t("summer.8"),
      image: "Images/summer/8.jpg",
      category: t("category.s"),
    },
    {
      id: 29,
      name: t("summer.9"),
      image: "Images/summer/9.jpg",
      category: t("category.s"),
    },
    {
      id: 30,
      name: t("summer.10"),
      image: "Images/summer/10.jpg",
      category: t("category.s"),
    },
  ];



  const handleCategoryClick = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
   
  }, [t]);

  const filteredProducts = () => {
    if (selectedId === 1) {
      return products;
    } else if (selectedId === 2) {
      return products.filter((product) => product.id >= 1 && product.id <= 10);
    } else if (selectedId === 3) { 
      return products.filter((product) => product.id >= 21 && product.id <= 30);
    } else if (selectedId === 4) { 
      return products.filter((product) => product.id >= 11 && product.id <= 20);
    }
    return [];
  };

  const searchFilter = () => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row md:pt-28 m-auto max-w-[85rem] px-5 pt-16 ">
      <div className=" md:w-[35%] lg:w-[30%]">
        <label className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-3xl">
          <input
            type="text"
            placeholder={t("colect.Searching")}
            className="pl-3 bg-transparent outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="p-1 text-xl text-white bg-red-600 rounded-full md:p-3">
            <CiSearch />
          </button>
        </label>
        <div className="mt-5 md:hidden">
  <ul className="flex overflow-x-auto">
    {categories.map((item) => (
      <li
        key={item.id}
        className={`mr-2 text-white text-xs rounded px-4 py-1 whitespace-nowrap flex-shrink-0 ${ // Changed px-8 to px-4 and added whitespace-nowrap and flex-shrink-0
          item.id == selectedId ? "bg-red-500 " : "bg-black"
        } cursor-pointer`}
        onClick={() => handleCategoryClick(item.id)}
      >
        {item.name}
      </li>
    ))}
  </ul>
</div>
        <div className="flex-col hidden mt-10 md:flex">
          <h1 className="text-3xl font-bold">{t("colect.Collection")}</h1>
          <ul className="mt-4">
            {categories.map((c) => (
              <div
                key={c.id}
                className={`mt-2 text-lg font-semibold cursor-pointer ${
                  c.id == selectedId
                    ? "text-[#9B7D52]"
                    : "hover:text-[#9B7D52]"
                } `}
                onClick={() => handleCategoryClick(c.id)}
              >
                {c.name}
              </div>
            ))}
          </ul>
        </div>
      </div>
      {searchQuery.length <= 0 ? (
        <div className="w-full">
          <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4 lg:pl-10 md:pl-5">
            {filteredProducts().map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center cursor-default group"
              >
                <div className="relative overflow-hidden rounded-xl group">
                  <Link to={`/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width={269}
                      height={202}
                      className="md:w-[165px] lg:w-[200px] transform transition-transform duration-300 group-hover:scale-105 cursor-default"
                    />
                  </Link>
                  <div
                    onClick={() =>
                      card.some((cardItem) => cardItem.id === item.id)
                        ? dispatch(removeCard(item.id))
                        : dispatch(addCard(item))
                    }
                    className="absolute z-10 p-1 text-white transition-transform duration-300 bg-gray-300 rounded-full cursor-pointer top-1 right-1 group-hover:scale-110"
                  >
                    {card.some((cardItem) => cardItem.id === item.id) ? (
                      <svg
                        stroke="currentColor"
                        fill="red"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                      </svg>
                    ) : (
                      <svg
                        stroke="currentColor"
                        fill="red"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                      </svg>
                    )}
                  </div>
                </div>
                <h1 className="mt-2 font-medium text-black transition-colors duration-300 group-hover:text-red-500">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4 lg:pl-10 md:pl-5">
          {searchFilter().length > 0 ? (
            searchFilter().map((item) => (
              <div key={item.id} className="flex flex-col items-center group">
                <div className="relative overflow-hidden rounded-xl group">
                  <Link to={`/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width={269}
                      height={202}
                      className="md:w-[165px] lg:w-[200px] transform transition-transform duration-300 group-hover:scale-105 cursor-default"
                    />
                  </Link>
                  <div
                    onClick={() =>
                      card.some((cardItem) => cardItem.id === item.id)
                        ? dispatch(removeCard(item.id))
                        : dispatch(addCard(item))
                    }
                    className="absolute z-10 p-1 text-white transition-transform duration-300 bg-gray-300 rounded-full cursor-pointer top-1 right-1 group-hover:scale-110"
                  >
                    {card.some((cardItem) => cardItem.id === item.id) ? (
                      <svg
                        stroke="currentColor"
                        fill="red"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                      </svg>
                    ) : (
                      <svg
                        stroke="currentColor"
                        fill="red"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                      </svg>
                    )}
                  </div>
                </div>
                <h1 className="mt-2 font-medium text-black transition-colors duration-300 group-hover:text-red-500">
                  {item.name}
                </h1>
              </div>
            ))
          ) : (
            <img src="Images/error.webp" alt="No results found" />
          )}
        </div>
      )}
    </div>
  );
};

export default Collection;