// components/AriaTooltipName.js

const AriaTooltipName = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures every ARIA tooltip node has an accessible name"`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div role="tooltip">{/* Missing accessible name for the tooltip */}</div>
      <p>No text in the tooltip</p>
    </>
  );
};

export default AriaTooltipName;
