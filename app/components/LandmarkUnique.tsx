import React from "react";

const LandmarkUnique = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: landmark-unique (Landmarks should have a unique role or role/label/title (i.e. accessible name) combination)
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="links-title">Elements with no unique role or role/label/title</h1>

      {/* Elements with no unique role */}
      {/* <header id="violation-header-1">First header - Visible Content</header>
<header id="violation-header-2">Second header - Visible Content</header>

<form id="violation-form-aria-label-1" aria-label="form-label">
  <input type="text" placeholder="Input 1"/>
</form>
<form id="violation-form-aria-label-2" aria-label="form-label">
  <input type="text" placeholder="Input 2"/>
</form>

<div id="form-label-1">form-with-label</div>
<div id="form-label-2">form-with-label</div>
<form id="violation-form-aria-labelledby-1" aria-labelledby="form-label-1">
  <input type="text" placeholder="Input 3"/>
</form>
<form id="violation-form-aria-labelledby-2" aria-labelledby="form-label-2">
  <input type="text" placeholder="Input 4"/>
</form>

<form id="violation-aside-aria-label-1" aria-label="aside-label">
  <input type="text" placeholder="Input 5"/>
</form>
<form id="violation-aside-aria-label-2" aria-label="aside-label">
  <input type="text" placeholder="Input 6"/>
</form>

<div id="aside-label-1">aside-with-label</div>
<div id="aside-label-2">aside-with-label</div>
<form id="violation-aside-aria-labelledby-1" aria-labelledby="aside-label-1">
  <input type="text" placeholder="Input 7"/>
</form>
<form id="violation-aside-aria-labelledby-2" aria-labelledby="aside-label-2">
  <input type="text" placeholder="Input 8"/>
</form>

<footer id="violation-footer-1">First footer - Visible Content</footer>
<footer id="violation-footer-2">Second footer - Visible Content</footer>

<div id="form-label-3">iframe-form-with-label</div>
<div id="violation-form-through-iframe-1" role="form" aria-labelledby="form-label-3">
  <p>Form content inside div</p>
</div>

<div id="violation-nav-through-iframe-1" role="navigation">
  <p>Navigation inside iframe</p>
</div>

<div id="violation-role-banner" aria-label="duplicate label" role="banner">
  <p>Banner content 1</p>
</div>
<div id="violation-role-banner-2" aria-label="duplicate label" role="banner">
  <p>Banner content 2</p>
</div>

<div id="violation-role-complementary" role="complementary">
  <p>Complementary content 1</p>
</div>
<div id="violation-role-complementary-2" role="complementary">
  <p>Complementary content 2</p>
</div>

<div id="violation-role-contentinfo" aria-label="duplicate label for contentinfo" role="contentinfo">
  <p>Content info 1</p>
</div>
<div id="violation-role-contentinfo-2" aria-label="duplicate label for contentinfo" role="contentinfo">
  <p>Content info 2</p>
</div>

<div id="violation-role-main" aria-label="duplicate label for main" role="main">
  <p>Main content 1</p>
</div>
<div id="violation-role-main-2" aria-label="duplicate label for main" role="main">
  <p>Main content 2</p>
</div>

<div id="violation-role-region" role="region">
  <p>Region content 1</p>
</div>
<div id="violation-role-region-2" role="region">
  <p>Region content 2</p>
</div>

<div id="violation-role-search" role="search">
  <p>Search content 1</p>
</div>
<div id="violation-role-search-2" role="search">
  <p>Search content 2</p>
</div>

<nav id="violation-nav" aria-label="duplicate label for nav">
  <p>Navigation 1</p>
</nav>
<nav id="violation-nav-2" aria-label="duplicate label for nav">
  <p>Navigation 2</p>
</nav>

<section id="violation-section" aria-label="duplicate label for section">
  <p>Section content 1</p>
</section>
<section id="violation-section-2" aria-label="duplicate label for section">
  <p>Section content 2</p>
</section> */}

    <main aria-label="main">Main 1 </main>
    <main aria-label="main">Main 2</main>

    <nav aria-label="duplicate nav">Nav 1</nav>
    <nav aria-label="duplicate nav">Nav 2</nav>

    <footer>Footer 1</footer>
    <footer>Footer 2</footer>

    </>
  );
};

export default LandmarkUnique;