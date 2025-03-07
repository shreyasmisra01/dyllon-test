import React from "react";

const LinksWithoutDiscernibleText = () => {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          Errors which will be fixed: link-name (Ensures links have discernible
          text)
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <h1>Links Without Discernible Text</h1>

      {/* Link without text, causing an accessibility issue */}
      <a href="#">Go</a>

      {/* Another link with empty content */}
      <a href="#">Click here</a>
    </>
  );
};

export default LinksWithoutDiscernibleText;
