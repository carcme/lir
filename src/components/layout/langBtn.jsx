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
        {globalState.lang === "de" && (
          <span>
            <svg width={20} height={15} className="fi-de" />
          </span>
        )}
        {globalState.lang === "en" && (
          <span>
            <svg width={20} height={15} className="fi-gb" />
          </span>
        )}
      </button>
    </>
  );
};

export default LangBtn;
