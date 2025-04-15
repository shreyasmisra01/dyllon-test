import React from "react";

const AriaConditionalAttr = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: aria-conditional-attr (Ensures ARIA attributes are used as described in the specification of the elements role)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Elements with invalid aria attributes which does not describe there correct roles</h1>

      {/* Div having aria-conditional-attr role*/}
      <label>
        <input type="checkbox" aria-checked="true"/>
        I agree to make my website accessible
    </label>


    <table>
        <tbody>
            <tr aria-level={1} aria-expanded="false">
                <td>My Downloads</td>
            </tr>
        </tbody>
    </table>
    </>
  );
};

export default AriaConditionalAttr;