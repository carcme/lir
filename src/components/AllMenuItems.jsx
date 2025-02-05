import React, { useCallback, useEffect, useState } from "react";
import client from "../client";
import ItemGrid from "./ItemGrid";

const AllMenuItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [drinksItems, setDrinksItems] = useState([]);

  const sanitise = useCallback((rawData) => {
    const items = rawData.map((data) => {
      const { title, desc, featured, slug, block, tags } = data.fields;
      const id = data.sys.id;
      const img = data.fields.image.fields.file.url;

      return { id, title, desc, img, featured, slug, block, tags };
    });

    setFoodItems(items.filter((item) => item.tags[0] === "food"));
    setDrinksItems(items.filter((item) => item.tags[0] === "drink"));
  }, []);

  const getAllMenuItems = useCallback(async () => {
    try {
      const resp = await client.getEntries({
        content_type: "lirMenuItem",
      });
      if (resp.items) sanitise(resp.items);
      else {
        setFoodItems([]);
        setDrinksItems([]);
      }
    } catch (error) {
      console.log("🚀 ~ getAllMenuItems ~ error:", error);
    }
  }, [sanitise]);

  useEffect(() => {
    getAllMenuItems();
  }, [getAllMenuItems]);

  return (
    <div className="animate-txtBlur">
      <div className="">
        <h2 className="font-bold max-w-4xl mx-auto flex flex-row sm:text-4xl text-2xl text-primaryGreen py-4 px-4 ">
          From Our Kitchen to Your Table
        </h2>
        <p className="font-bold max-w-4xl mx-auto flex flex-row text-sm text-primaryGreen pb-4 px-4 ">
          Our Signature Dishes
        </p>
      </div>

      <ItemGrid itemList={foodItems} className="py-20" />

      <hr className="h-px mt-10 sm:mx-32 mx-10 bg-primaryGreen/20 border-0 " />

      <div className="pt-10">
        <h2 className="font-bold max-w-4xl mx-auto flex flex-row sm:text-4xl text-2xl text-primaryGreen py-1 px-4">
          Bespoke Beverages
        </h2>
        <p className="font-bold max-w-4xl mx-auto flex flex-row text-sm text-primaryGreen pb-4 px-4 ">
          Designed by Us, Drank by You
        </p>
      </div>

      <ItemGrid itemList={drinksItems} />

      <hr className="h-px mt-10 sm:mx-32 mx-10 bg-primaryGreen/20 border-0 " />
    </div>
  );
};

export default AllMenuItems;
