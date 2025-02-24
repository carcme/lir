import React, { useContext, useEffect, useState } from "react";
import LirDrawer from "./LirDrawer";

import { GlobalStateContext } from "../context/GlobalContextProvider";
import BentoOverlay from "./bentoGrid/bentoOverlay";

const LirGridBento = ({ showHeader = false, data }) => {
  const globalState = useContext(GlobalStateContext);

  const [dataItems, setDataItems] = useState(data);
  const [itemIndex, setItemIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isClicked = (id) => {
    setItemIndex(id);
    setIsOpen(true);
  };

  useEffect(() => {
    // Little hack to cos easier than playing with the json :)
    data[4].id = 2;
    data[2].id = 4;
    const newOrder = [data[0], data[1], data[4], data[3], data[2]];

    setDataItems(newOrder);
  }, [globalState.lang]);

  return (
    <div className="mx-auto w-full max-w-7xl md:h-full">
      <p className="py-2 text-2xl text-white">Bento Grid Example</p>
      <div className="flex justify-center items-center pb-10 w-full md:h-full md:min-h-screen bg-primaryGreen">
        <div className="flex flex-col gap-4 w-full md:max-h-96 md:min-h-screen md:h-full md:grid md:grid-cols-8 md:grid-rows-8">
          {dataItems.map((item, index) => (
            <div
              key={index}
              className={`relative
                ${
                  index === 0
                    ? "col-span-4 row-span-4"
                    : index === 1
                      ? "col-span-4 row-span-2"
                      : index === 2
                        ? "col-span-4 row-span-2"
                        : index === 3
                          ? "col-span-3 row-span-4"
                          : "col-span-5 row-span-4"
                }`}
            >
              <picture>
                <source srcSet={item.image.srcset} type="image/webp" />
                <img
                  src={item.image.img.src}
                  width={item.image.img.w}
                  height={item.image.img.h}
                  // srcSet={item.image.srcset}
                  alt={item.name}
                  aria-label={item.name}
                  // loading="lazy"
                  className="object-cover w-full h-full rounded-lg"
                />
              </picture>
              <BentoOverlay text={item} select={isClicked} />
              <LirDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={dataItems[itemIndex]}
                orientation="center"
                aria-expanded={isOpen}
              ></LirDrawer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LirGridBento;
