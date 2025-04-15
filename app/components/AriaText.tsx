import React from "react";

const AriaText = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: aria-text (Ensures role=text is used on elements with no focusable descendants)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Elements with role=text and having focusable descendants</h1>

      {/* Link without text, causing an accessibility issue */}
      <div role="text">
        Learn more by visiting our <a href="https://example.com">website</a>.
    </div>
    </>
  );
};

export default AriaText;
