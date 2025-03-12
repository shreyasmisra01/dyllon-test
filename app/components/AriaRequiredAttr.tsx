const AriaRequiredAttr = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures elements with ARIA roles have all required ARIA attributes"`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <button role="link">
        {`Button with role="link" missing required attribute`}
      </button>
    </>
  );
};

export default AriaRequiredAttr;
