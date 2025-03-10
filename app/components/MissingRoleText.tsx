import React from "react";

const MissingRoleText = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: Ensures role=&quot;text&quot; is used on
          elements with no focusable descendants
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="important-info-title">Important Information</h1>
      <p id="important-info-text">
        This is some important information that should be marked with
        role=&quot;text&quot;.
      </p>
    </>
  );
};

export default MissingRoleText;
