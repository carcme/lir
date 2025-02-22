import React, { useContext, useEffect, useState } from "react";
import LirDrawer from "./LirDrawer";

import { GlobalStateContext } from "../context/GlobalContextProvider";

const LirGrid = ({ showHeader = false, data }) => {
  const globalState = useContext(GlobalStateContext);

  const [dataItems, setDataItems] = useState(data);
  const [itemIndex, setItemIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isClicked = (id) => {
    setItemIndex(id);
    setIsOpen(true);
  };
  const title = dataItems[itemIndex];
  console.log("🚀 ~ LirGrid ~ title:", title);
  useEffect(() => {
    setDataItems(data);
  }, [globalState.lang]);

  return (
    <div className="mx-auto max-w-7xl">
      {showHeader && (
        <header className="pb-4 text-lg font-bold text-white">
          Click image to read more
        </header>
      )}

      <p className="py-2 pt-5 text-2xl text-white">Standard Grid Example</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dataItems.map((item, i) => {
          return (
            <div
              key={i}
              className="relative group"
              // className="relative transition-opacity duration-700 group after:absolute after:inset-0 hover:after:bg-primaryGreenLight after:duration-700 after:mix-blend-soft-light after:rounded-lg"
            >
              <img
                className="object-cover w-full h-full rounded-xl shadow-lg transition-all duration-500 md:group-hover:scale-[1.02] hover:shadow-xl"
                src={item.image}
                alt={item.name}
                aria-label={item.name}
                loading="lazy"
                onClick={() => isClicked(i)}
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent transition-all duration-500 to-black/70 md:group-hover:scale-[1.02]"
                onClick={() => isClicked(i)}
              />
              <div
                className="overflow-hidden absolute bottom-2 left-2 justify-start w-full text-white sm:bottom-3 sm:left-3"
                onClick={() => isClicked(i)}
              >
                <h2 className="pr-5 text-2xl font-bold leading-tight truncate text-white/70">
                  {item.name}
                </h2>
                <p className="block pr-10 truncate text-white/70">
                  {item.desc[0]}
                </p>
              </div>
              <LirDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={dataItems[itemIndex]}
                orientation="right"
                aria-expanded={isOpen}
              ></LirDrawer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LirGrid;
