// components/AriaRequiredParent.js
const AriaRequiredParent = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures elements with an ARIA role that require parent roles are contained by them."`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div role="option">{/* Missing required parent role for option */}</div>
    </>
  );
};

export default AriaRequiredParent;
