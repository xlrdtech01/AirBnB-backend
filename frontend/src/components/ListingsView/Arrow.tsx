import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick}: {
  children: React.ReactNode,
  disabled: boolean,
  onClick: VoidFunction,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
        margin: "0 auto",
        backgroundColor: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
}



export default Arrow;
