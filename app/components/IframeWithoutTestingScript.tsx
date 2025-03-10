import React from "react";

const IframeWithoutTestingScript = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed:{" "}
          {`Ensures <iframe> and <frame> elements contain the axe-core script`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="iframe-title">
        Embedding an Iframe Without Accessibility Testing
      </h1>
      <iframe
        id="example-iframe"
        src="https://wscan.dealopia.com"
        title="Example Website"
        width="900"
        height="500"
      />
    </>
  );
};

export default IframeWithoutTestingScript;
