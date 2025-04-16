import React from "react";

const LandmarkNoDuplicateBanner = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: landmark-no-duplicate-banner (Ensures the document has at most one banner landmark)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Element with two header components</h1>

      <div>
      {/* Issue 1: Two top-level <header> elements (both implicitly role="banner") */}
      <header role="banner">
        <h1>Website Title</h1>
      </header>
      <header role="banner">
        <p>Secondary header information</p>
      </header>

      <main>
        <p>Main content of the page.</p>
      </main>

      <footer>
        <p>© 2025 My Website</p>
      </footer>
    </div>
    </>
  );
};

export default LandmarkNoDuplicateBanner;




