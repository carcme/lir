import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LirDrawer from "./LirDrawer";
import LirGridText from "./LirGridText";

import {
  GlobalDispatchContext,
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";

const LirGrid = ({ showHeader = false, data }) => {
  const globalState = useContext(GlobalStateContext);

  const [dataItems, setDataItems] = useState(data);
  const [itemIndex, setItemIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isClicked = (id) => {
    setItemIndex(id);
    setIsOpen(true);
  };

  useEffect(() => {
    setDataItems(data);
  }, [globalState.lang]);

  return (
    <div className="">
      {showHeader && (
        <header className="pb-4 text-lg font-bold text-white">
          Click image to read more
        </header>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="relative duration-700"
              // className="relative transition-opacity duration-700 group after:absolute after:inset-0 hover:after:bg-primaryGreenLight after:duration-700 after:mix-blend-soft-light after:rounded-lg"
            >
              <img
                className="object-cover w-full h-full rounded-md shadow-lg transition-all duration-500 md:hover:scale-105 hover:shadow-xl"
                src={item.image}
                alt={item.title}
                onClick={() => isClicked(i)}
              />
              <LirDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={dataItems[itemIndex]}
              >
                {/* <LirGridText
                  name={item.name}
                  tag={item.tag}
                  desc={item.desc}
                  btn1={item.btn1}
                  btn2={item.btn2}
                  btn1Link={item.btn1Link}
                  btn2Link={item.btn2Link}
                /> */}
              </LirDrawer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LirGrid;
