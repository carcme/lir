import React, { useContext } from "react";
import { Link } from "react-router-dom";
import setupTags from "../lib/setupTags";

const TagsList = ({ lirItems }) => {
  const newTags = setupTags(lirItems);
  console.log("🚀 ~ TagsList ~ newTags:", newTags);

  return (
    <div className="flex flex-col gap-4">
      <h4>Tags</h4>
      <div className="grid grid-cols-3">
        {newTags.map((tag, index) => {
          const [text, value] = tag;

          return (
            <Link to={`/tags/${lirItems.slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
