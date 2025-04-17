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
      {/* <div scope="row">Invalid Div having scope=row</div> */}

      <table id="scope-attr-valid-table" border={1}>
      <caption>Product Comparison</caption>
      <thead>
        <tr>
          <th id="scope-attr-valid-table-header-row" scope="row">Feature</th>
          <th id="scope-attr-valid-table-header-col" scope="col">Product A</th>
          <th id="scope-attr-valid-table-header-outside" scope="outside">Product B</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* Incorrect scope attribute - should be "row" for a data cell in the first column */}
          <th id="scope-attr-valid-table-header-col" scope="col">Price</th>
          <td>$19.99</td>
          <td>$24.99</td>
        </tr>
        <tr>
          {/* Missing scope attribute - should be "row" for a data cell in the first column */}
          <th id="scope-attr-valid-table-header-none">Availability</th>
          <td>In Stock</td>
          <td>Out of Stock</td>
        </tr>
        <tr>
          {/* Incorrect scope attribute - should be "col" for a header cell in the header row */}
          <th id="scope-attr-valid-table-header-outside" scope="outside">Rating</th>
          <td>4.5 Stars</td>
          <td>4.2 Stars</td>
        </tr>
      </tbody>
    </table>
    </>
  );
};

export default ScopeAttrValid;