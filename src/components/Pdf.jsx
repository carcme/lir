import React from "react";

const Pdf = ({ url }) => {
  return (
    <>
      <div className="h-[60rem]">
        <object data={url} type="application/pdf" width="100%" height="100%">
          <p>
            Device not compatiable.
            <span className="text-blue-500">
              <a href={url} target="_blank">
                Click here to view the menu
              </a>
            </span>
          </p>
        </object>
      </div>
    </>
  );
};

export default Pdf;
