"use client";

export default function AriaHiddenBody() {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures aria-hidden=""true"" is not present on the document body."`}
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <div aria-hidden="true">
        <h1>This content is hidden from assistive technologies</h1>
        <p>
          {`This entire section is inaccessible to screen readers due to
          aria-hidden="true".`}
        </p>
      </div>
    </>
  );
}
