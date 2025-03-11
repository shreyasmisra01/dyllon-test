import React from "react";

const AriaMeterNameError = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures every ARIA meter node has an accessible name."`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div>
        <meter value="0.6" min="0" max="1"></meter>
      </div>
    </>
  );
};

export default AriaMeterNameError;
