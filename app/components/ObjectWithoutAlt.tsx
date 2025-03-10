import React from "react";

const ObjectWithoutAlt = () => {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          {`Errors which will be fixed: Ensures <object> elements have alternate text`}
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <object
        width={400}
        height={200}
        data="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        type="image/jpeg"
      >
        <p>Your browser does not support this image format.</p>
      </object>
    </>
  );
};

export default ObjectWithoutAlt;
