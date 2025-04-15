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

      {/* Link with text, but no discernible text */}
      <p>
        For more info, click <a id="link-3" href="https://google.com">here</a>.
      </p>

      {/* Link with icon, but no id and no discernible text */}
      <p>
        Go to our homepage <a href="https://dyllon-test-new.dealopia.com/"><i className="fas fa-home"></i></a>
      </p>
    </>
  );
};

export default LinksWithoutDiscernibleText;
