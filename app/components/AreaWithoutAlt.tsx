export default function AreaWithoutAlt() {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          {`Errors which will be fixed: Ensures <area> elements of image maps have alternate text`}
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <img
        src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        width={400}
        height={200}
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          shape="rect"
          coords="34,44,270,350" // Specify the coordinates for the area
          href="#"
          title="Click here" // Add a tooltip for the area
        />
      </map>
    </>
  );
}
