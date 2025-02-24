import React, { useEffect, useState } from "react";
import ItemGrid from "./ItemGrid";
import { useLirMenuStore } from "../store";

const AllMenuItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [drinksItems, setDrinksItems] = useState([]);
  // const [menus, setMenus] = useState(useLirMenuStore.getState().menu);

  const { menus, isLoading, error, fetchMenus } = useLirMenuStore();
  console.log("🚀 ~ AllMenuItems ~ menus:", menus);

  useEffect(() => {
    fetchMenus();

    const menus = useLirMenuStore.getState().menu;
    if (menus) {
      setFoodItems(menus.filter((item) => item.tags[0] === "food"));
      setDrinksItems(menus.filter((item) => item.tags[0] === "drink"));
    }
  }, []);

  return (
    <div className="animate-txtBlur">
      <div className="">
        <h2 className="flex flex-row px-4 py-4 mx-auto max-w-4xl text-2xl font-bold sm:text-4xl text-primaryGreen">
          From Our Kitchen to Your Table
        </h2>
        <p className="flex flex-row px-4 pb-4 mx-auto max-w-4xl text-sm font-bold text-primaryGreen">
          Our Signature Dishes
        </p>
      </div>

      <ItemGrid itemList={foodItems} className="py-20" />

      <hr className="mx-10 mt-10 h-px border-0 sm:mx-32 bg-primaryGreen/20" />

      <div className="pt-10">
        <h2 className="flex flex-row px-4 py-1 mx-auto max-w-4xl text-2xl font-bold sm:text-4xl text-primaryGreen">
          Bespoke Beverages
        </h2>
        <p className="flex flex-row px-4 pb-4 mx-auto max-w-4xl text-sm font-bold text-primaryGreen">
          Designed by Us, Drank by You
        </p>
      </div>

      <ItemGrid itemList={drinksItems} />

      <hr className="mx-10 mt-10 h-px border-0 sm:mx-32 bg-primaryGreen/20" />
    </div>
  );
};

export default AllMenuItems;
