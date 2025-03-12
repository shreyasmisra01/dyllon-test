// components/Bypass.js
const Bypass = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content"`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div>
        {/* Missing a mechanism (like a skip to content link) for bypassing navigation */}
        <header>
          <nav>
            <ul>
              <li>Navigation Item 1</li>
              <li>Navigation Item 2</li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>Main Content</h1>
          <p>Content here...</p>
        </main>
      </div>
    </>
  );
};

export default Bypass;
