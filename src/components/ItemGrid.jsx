import React from "react";
import Item from "./Item";

const ItemGrid = ({ itemList }) => {
  return (
    <>
      <div className="px-4 mx-auto max-w-4xl justify-center flex items-center gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-8">
          {itemList.map((item, index) => {
            const { id, title, desc, img, featured, slug } = item;

            return (
              <Item
                key={index}
                id={id}
                img={img}
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
