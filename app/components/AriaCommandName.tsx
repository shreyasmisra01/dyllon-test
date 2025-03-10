"use client";

export default function AriaCommandName() {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          {`Errors which will be fixed: Ensures every ARIA button, link and menuitem has an accessible name`}
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        aria-label="Submit Form"
      >
        Submit
      </button>
      <a href="#" aria-label="Visit Example Website">
        Click Here
      </a>
      <div>
        {/* Replacing <menuitem> with <button> for better compatibility */}
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          aria-label="Open Settings"
        >
          Settings
        </button>
      </div>
    </>
  );
}
