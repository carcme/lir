import React from "react";
import Item from "./Item";

const ItemGrid = ({ itemList }) => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center px-4 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {itemList.map((item, index) => {
            const { id, title, desc, image, featured, slug } = item;

            return (
              <Item
                key={index}
                id={id}
                img={image}
                title={title}
                desc={desc}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemGrid;
