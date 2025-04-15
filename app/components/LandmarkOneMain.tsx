import React from "react";

const LandmarkOneMain = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: landmark-one-main (Ensures the document has a main landmark)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Elements with another main tags</h1>

      {/* Nested main tags */}
      <main>
        <p>Below is another main tag</p>

        <main>
            <p>Nested main tag</p>
        </main>
      </main>
    </>
  );
};

export default LandmarkOneMain;