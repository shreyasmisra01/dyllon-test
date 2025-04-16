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
      {/* <div role="input">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
    </div> */}

<div>
      {/* Issue 1: Using the deprecated "application" role on a div */}
      <div role="application">
        <p>This div is using the deprecated application role.</p>
      </div>

      {/* Issue 2: Using the deprecated "directory" role on a ul */}
      <ul role="directory">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>

      {/* Issue 3: Using the deprecated "toolbar" role on a div (should be used with aria-orientation) */}
      <div role="toolbar">
        <button>Button 1</button>
        <button>Button 2</button>
      </div>

      {/* Issue 4: Using the deprecated "menuitemcheckbox" role on a div (should be input type="checkbox" with role="menuitemcheckbox") */}
      <div role="menuitemcheckbox" aria-checked="false">Checkbox Item</div>

      {/* Issue 5: Using the deprecated "menuitemradio" role on a div (should be input type="radio" with role="menuitemradio") */}
      <div role="menuitemradio" aria-checked="false">Radio Item</div>
    </div>
    </>
  );
};

export default AriaDeprecatedRole;