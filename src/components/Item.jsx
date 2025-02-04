import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, desc, slug }) => {
  return (
    <>
      <Link to={id} title={title} image={img} body={desc}>
        <div className="">
          <img
            src={img}
            alt={title}
            className="object-cover h-32 w-screen sm:w-72 rounded-lg "
          />
          <h2 className="mb-0 mt-1 text-primaryGreen font-bold">{title}</h2>
          <p className="text-sm font-light text-primaryGreen">{desc}</p>
        </div>
      </Link>
    </>
  );
};

export default Item;
