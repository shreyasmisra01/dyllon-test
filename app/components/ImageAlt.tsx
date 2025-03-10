import React from "react";

const ImageAlt = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: Image alt, Image role, other attributes
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />

      <div id="image-gallery" className="grid grid-cols-3 p-3 gap-4">
        <img
          id="image-1"
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          width={500}
          height={300} // Ensure all images have the same height
          className="object-cover w-full h-[300px]"
        />
        <img
          id="image-2"
          src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
          width={500}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <img
          id="image-3"
          src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
          width={500}
          height={300}
          className="object-cover w-full h-[300px]"
        />
      </div>
    </>
  );
};

export default ImageAlt;
