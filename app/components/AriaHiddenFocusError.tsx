import React from "react";

const AriaHiddenFocusError = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures every ARIA input field has an accessible name."`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div
        aria-hidden="true"
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "lightgray",
        }}
      >
        <button>Focusable Button Inside aria-hidden</button>
        <input type="text" placeholder="Focusable Input Inside aria-hidden" />
      </div>
    </>
  );
};

export default AriaHiddenFocusError;
