"use client";

import React, { useState } from "react";

const DialogWithoutAccessibleName = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: aria-dialog-name
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <button
        id="open-dialog-button"
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={openDialog}
      >
        Open Dialog
      </button>

      {isOpen && (
        <div
          id="dialog"
          role="dialog"
          aria-hidden="false"
          style={{ border: "1px solid black", padding: "20px" }}
        >
          <h2 id="dialog-title">Dialog Content</h2>
          <p id="dialog-description">
            This is a dialog without an accessible name.
          </p>
          <button
            id="close-dialog-button"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={closeDialog}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default DialogWithoutAccessibleName;
