import React from "react";

const AriaDeprecatedRole = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: aria-deprecated-role (Ensures role is not deprecated or abstracted as per WAG standards)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Elements with deprecated role</h1>

      {/* Div having deprecated role*/}
      <div role="input">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
    </div>
    </>
  );
};

export default AriaDeprecatedRole;