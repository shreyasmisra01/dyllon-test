"use client";

import React, { useState } from "react";

const DialogWithoutAccessibleName = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          Errors which will be fixed: aria-dialog-name
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={openDialog}
      >
        Open Dialog
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-hidden="false"
          style={{ border: "1px solid black", padding: "20px" }}
        >
          <h2>Dialog Content</h2>
          <p>This is a dialog without an accessible name.</p>
          <button
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
