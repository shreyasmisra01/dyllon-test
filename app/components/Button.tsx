import React from "react";

const Button = () => {
  return (
    <>
      <img
        id="logo"
        className="dark:invert"
        src="/next.svg"
        width={180}
        height={38}
      />

      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: Button Title, Button role, Aria label, and
          other attributes
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />

      <div
        id="button-container"
        className="flex gap-4 items-center flex-col sm:flex-row"
      >
        <button
          id="button-1"
          role="none"
          aria-hidden="true"
          style={{ all: "unset" }}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          rel="noopener noreferrer"
        >
          {/* <span className="text-black">Deploy now</span> */}
        </button>
        <button
          id="button-2"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-background gap-2 hover:bg-[#1d1d1d] dark:hover:bg-[#1d1d1d] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          <img id="vercel-logo" src="/vercel.svg" width={20} height={20} />
        </button>
        <button
          id="button-3"
          role="none"
          aria-hidden="true"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Test button
        </button>
      </div>
    </>
  );
};

export default Button;
