import React from "react";

const LinksWithoutDiscernibleText = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: link-name (Ensures links have discernible
          text)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Links Without Discernible Text</h1>

      {/* Link without text, causing an accessibility issue */}
      <a id="link-1" href="#">
        Go
      </a>

      {/* Another link with empty content */}
      <a id="link-2" href="#">
        Click here
      </a>
    </>
  );
};

export default LinksWithoutDiscernibleText;
