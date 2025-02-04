import React from "react";
import Pdfile from "/assets/pdf/Menu.pdf";

const Pdf = () => {
  return (
    <>
      <div className="h-[60rem] ">
        <object data={Pdfile} type="application/pdf" width="100%" height="100%">
          <p>
            Alternative text - include a link <a href={Pdfile}>to the PDF!</a>
          </p>
        </object>
      </div>
    </>
  );
};

export default Pdf;
