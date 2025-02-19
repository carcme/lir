import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, desc, slug }) => {
  return (
    <>
      <Link to={slug} title={title} image={img} body={desc}>
        <div className="">
          <img
            src={img.url}
            alt={title}
            className="object-cover w-screen h-32 rounded-lg sm:w-72"
          />
          <h2 className="mt-1 mb-0 font-bold text-primaryGreen">{title}</h2>
          <p className="text-sm font-light text-primaryGreen">{desc}</p>
        </div>
      </Link>
    </>
  );
};

export default Item;
