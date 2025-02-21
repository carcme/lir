import React, { useContext, useEffect, useState } from "react";
import LirDrawer from "./LirDrawer";

import { GlobalStateContext } from "../context/GlobalContextProvider";
import { Link } from "react-router-dom";
import BentoOverlay from "./bentoGrid/bentoOverlay";

const blogs = [
  {
    id: 1,
    title: "This is bento grid in vercel blog",
    author: "Michael Jordan",
    date: "12.10.1999",
    image: "https://picsum.photos/seed/1/600/400",
    avatar: "https://i.pravatar.cc/150?img=1",
    link: "/",
  },
  {
    id: 2,
    title: "Exploring the Future of Web Development",
    author: "Jane Doe",
    date: "05.07.2023",
    image: "https://picsum.photos/seed/2/600/400",
    avatar: "https://i.pravatar.cc/150?img=2",
    link: "/",
  },
  {
    id: 3,
    title: "How to Build Scalable Applications",
    author: "John Smith",
    date: "18.03.2021",
    image: "https://picsum.photos/seed/3/600/400",
    avatar: "https://i.pravatar.cc/150?img=3",
    link: "/",
  },
  {
    id: 4,
    title: "Mastering React with Next.js",
    author: "Alice Johnson",
    date: "24.12.2022",
    image: "https://picsum.photos/seed/9/600/400",
    avatar: "https://i.pravatar.cc/150?img=4",
    link: "/",
  },
  {
    id: 5,
    title: "Understanding TypeScript in 2024",
    author: "Robert Brown",
    date: "02.11.2024",
    image: "https://picsum.photos/seed/5/600/400",
    avatar: "https://i.pravatar.cc/150?img=5",
    link: "/",
  },
];

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
              className={`relative bg-gradient-to-r from-green-500 to-green-700 rounded-lg ${
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
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
              <BentoOverlay text={item} select={isClicked} />
              <LirDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={dataItems[itemIndex]}
                orientation="center"
              ></LirDrawer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LirGridBento;
