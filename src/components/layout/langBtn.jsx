import React, { useContext } from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";

const LangBtn = ({ clsName }) => {
  const globalDispatch = useContext(GlobalDispatchContext);
  const globalState = useContext(GlobalStateContext);
  return (
    <>
      <button
        className={clsName}
        aria-label="language"
        onClick={() => {
          globalDispatch({ type: "TOGGLE_LANG" });
        }}
      >
        {globalState.lang === "de" && <span className="fi fi-gb fib"></span>}
        {globalState.lang === "en" && <span className="fi fi-de fib"></span>}
      </button>
    </>
  );
};

export default LangBtn;
