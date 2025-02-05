import React from "react";
import Pdfile from "/assets/pdf/Menu.pdf";

const Pdf = () => {
  return (
    <>
      <div className="h-[60rem]">
        <object data={Pdfile} type="application/pdf" width="100%" height="100%">
          <p>
            Device not compatiable.{" "}
            <span className="text-blue-500">
              <a href={Pdfile} target="_blank">
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
