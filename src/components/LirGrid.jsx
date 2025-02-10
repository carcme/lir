import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LirDrawer from "./LirDrawer";
import LirGridText from "./LirGridText";
import { getLanguage, useLanguage } from "../context/LanguageContext";

const LirGrid = ({ showHeader = false, data }) => {
  const [dataItems, setDataItems] = useState(data);
  const [itemIndex, setItemIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const lang = useLanguage();

  const isClicked = (id) => {
    setItemIndex(id);
    setIsOpen(true);
  };

  useEffect(() => {
    setDataItems(data);
  }, [lang]);

  return (
    <div className="">
      {showHeader && (
        <header className="pb-4 font-bold text-lg text-white">
          Click image to read more
        </header>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="relative duration-700"
              // className="relative group transition-opacity duration-700 after:absolute after:inset-0 hover:after:bg-primaryGreenLight after:duration-700 after:mix-blend-soft-light after:rounded-lg"
            >
              <img
                className="w-full h-full rounded-md object-cover md:hover:scale-105 transition-all duration-500 hover:shadow-xl  shadow-lg"
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
