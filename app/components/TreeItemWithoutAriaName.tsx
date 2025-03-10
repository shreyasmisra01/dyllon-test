import React from "react";

const TreeItemWithoutName = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: aria-treeitem-name
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div id="tree-container" role="tree">
        <div id="tree-item-1" role="treeitem" aria-label="Tree Item 1">
          <p>This tree item does not have an accessible name.</p>
        </div>
        <div id="tree-item-2" role="treeitem" aria-label="Tree Item 2">
          <p>This is another tree item without an accessible name.</p>
        </div>
      </div>
    </>
  );
};

export default TreeItemWithoutName;
