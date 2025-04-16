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
      {/* <main className="border border-black" role="main">
        <p>Below is another main tag</p>

        <main className="border border-black" role="main">
            <p>Nested main tag</p>
        </main>
      </main> */}

    <div>
      <header>
        <h1>Page Title</h1>
      </header>
      <main>
        <p>First main content area.</p>
      </main>
      <aside>
        <p>Sidebar content.</p>
      </aside>
      <main>
        <p>Second main content area.</p>
      </main>
      <footer>
        <p>© 2025 My Test Website</p>
      </footer>
    </div>
    </>
  );
};

export default LandmarkOneMain;