// components/SelectName.js
const SelectName = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures select element has an accessible name"`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <select id="select-option1">
        <option id="option1" value="1">
          Option 1
        </option>
        <option id="option2" value="2">
          Option 2
        </option>
        {/* Missing accessible name for the select element */}
      </select>
    </>
  );
};

export default SelectName;
