import React from "react";

const DuplicateAriaId = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: duplicate-id-aria
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div id="form-container">
        <h1 id="form-title">Form with Duplicate ARIA IDs</h1>
        <form id="form">
          {/* Duplicate id used here */}
          <label htmlFor="name" id="label-name">
            Name:
          </label>
          <input
            className="border border-black"
            type="text"
            id="name"
            name="name"
          />

          {/* Another element with the same id="name" causing the conflict */}
          <div aria-labelledby="name" id="section-1">
            This section is labeled by the Name input.
          </div>

          {/* Duplicate id used again */}
          <label htmlFor="name" id="label-name-duplicate">
            Name (Duplicate):
          </label>
          <input
            className="border border-black"
            type="text"
            id="name"
            name="name"
          />
        </form>

        {/* Another element with the same id="name" causing another conflict */}
        <div aria-labelledby="name" id="section-2">
          This section also is labeled by the Name input (Duplicate).
        </div>
      </div>
    </>
  );
};

export default DuplicateAriaId;
