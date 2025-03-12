const AriaRoles = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: "Ensures all elements with a role attribute use a valid value"`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <div role="invalidRole">This element has an invalid ARIA role</div>
    </>
  );
};

export default AriaRoles;
