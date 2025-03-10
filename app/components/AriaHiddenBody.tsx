"use client";

export default function AriaHiddenBody() {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures aria-hidden=""true"" is not present on the document body."`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div id="hidden-content">
        <h1 id="hidden-heading">
          This content is hidden from assistive technologies
        </h1>
        <p id="hidden-description">
          {`This entire section is inaccessible to screen readers due to
          aria-hidden="true".`}
        </p>
      </div>
    </>
  );
}
