export default function AreaWithoutAlt() {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          {`Errors which will be fixed: Ensures <area> elements of image maps have alternate text`}
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <img
        id="main-image"
        src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        width={400}
        height={200}
        useMap="#image-map"
      />
      <map name="image-map" id="image-map">
        <area
          id="area-1"
          shape="rect"
          coords="34,44,270,350" // Specify the coordinates for the area
          href="#"
        />
      </map>
    </>
  );
}
