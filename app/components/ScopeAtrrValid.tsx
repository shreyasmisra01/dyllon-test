import React from "react";

const ScopeAttrValid = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: scope-attr-valid (Ensures scope is used in th elements in tables)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Elements with invalid scope property</h1>

      {/* Div having invalid scope */} 
      <div scope="row">Invalid Div having scope=row</div>
    </>
  );
};

export default ScopeAttrValid;