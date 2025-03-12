// components/AriaValidAttr.js
const AriaValidAttr = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures attributes that begin with aria- are valid ARIA attributes"`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        role="button"
        aria-invalid="true"
      >
        {/* Invalid ARIA attribute (aria-invalid is not a valid ARIA attribute for role "button") */}
      </div>
    </>
  );
};

export default AriaValidAttr;
