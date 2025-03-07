import React from "react";

const TreeItemWithoutName = () => {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          Errors which will be fixed: aria-treeitem-name
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <div role="tree">
        <div role="treeitem">
          <p>This tree item does not have an accessible name.</p>
        </div>
        <div role="treeitem">
          <p>This is another tree item without an accessible name.</p>
        </div>
      </div>
    </>
  );
};

export default TreeItemWithoutName;
