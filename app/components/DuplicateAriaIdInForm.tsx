import React from "react";

const DuplicateAriaId = () => {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          Errors which will be fixed: duplicate-id-aria
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <div>
        <h1>Form with Duplicate ARIA IDs</h1>
        <form>
          {/* Duplicate id used here */}
          <label htmlFor="name">Name:</label>
          <input
            className="border border-black"
            type="text"
            id="name"
            name="name"
          />

          {/* Another element with the same id="name" causing the conflict */}
          <div aria-labelledby="name">
            This section is labeled by the Name input.
          </div>

          {/* Duplicate id used again */}
          <label htmlFor="name">Name (Duplicate):</label>
          <input
            className="border border-black"
            type="text"
            id="name"
            name="name"
          />
        </form>

        {/* Another element with the same id="name" causing another conflict */}
        <div aria-labelledby="name">
          This section also is labeled by the Name input (Duplicate).
        </div>
      </div>
    </>
  );
};

export default DuplicateAriaId;
