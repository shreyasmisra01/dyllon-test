import React from "react";

const AriaText = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: aria-text (Ensures role=text is used on elements with no focusable descendants)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Elements with role=text and having focusable descendants</h1>

      {/* Link without text, causing an accessibility issue */}
      {/* <div role="text">
        Learn more by visiting our <a href="https://example.com">website</a>.
    </div> */}

    <div id="role-text" aria-readonly role="text">
      {/* Issue 1: Button with no text content and no accessible name */}
      <p>Below is a button with no text and accessible name</p>
      <button className="border border-black"></button>

      {/* Issue 2: Link with no text content and no accessible name */}
      <p>Below is a anchor tag with no text and accessible name</p>
      <a href="#"></a>

      {/* Issue 3: Element with an aria-label but no visible text (potentially confusing) */}
      <div aria-label="Close dialog">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
          {/* Icon without accompanying text */}
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>

      {/* Issue 4: Input field with only an aria-label, but no visible label */}
      <input type="text" aria-label="Search" id="search-input" className="border border-black" />

      {/* Issue 5: Element with aria-labelledby pointing to a non-existent ID */}
      <div aria-labelledby="non-existent-id">Content</div>
      <p id="some-other-id">Unrelated text</p>
    </div>
    </>
  );
};

export default AriaText;
