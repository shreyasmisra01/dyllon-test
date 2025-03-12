// components/AriaValidAttrValue.js
const AriaValidAttrValue = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures all ARIA attributes have valid values"`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        role="button"
        aria-pressed="invalidValue"
      >
        {/* Invalid value for aria-pressed */}
      </div>
      <p>No text in the above div (It has a type button)</p>
    </>
  );
};

export default AriaValidAttrValue;
