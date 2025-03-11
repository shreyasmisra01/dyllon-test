import React from "react";

const AriaInputFieldNameError = () => {
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
      <input
        className="border border-black"
        type="text"
        placeholder="Missing ARIA Label"
      />
    </>
  );
};

export default AriaInputFieldNameError;
