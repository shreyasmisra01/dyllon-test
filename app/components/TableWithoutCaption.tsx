import React from "react";

const TableWithoutCaption = () => {
  return (
    <>
      <div id="error-message">
        <span id="error-text" className="text-red-800 font-bold">
          Errors which will be fixed: table-fake-caption
        </span>
      </div>
      <hr
        id="divider"
        className="bg-black w-full border border-black mb-[-20px] mt-[-20px]"
      />
      <h1 id="table-title">Table Without Caption</h1>
      <table id="example-table" className="border border-black">
        <caption id="table-caption">
          Table displaying people&apos;s information
        </caption>
        <thead className="border border-black">
          <tr>
            <th className="border border-black p-1">Name</th>
            <th className="border border-black p-1">Age</th>
            <th className="border border-black p-1">Occupation</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black">
            <td className="border border-black p-1">John Doe</td>
            <td className="border border-black p-1">28</td>
            <td className="border border-black p-1">Developer</td>
          </tr>
          <tr>
            <td className="border border-black p-1">Jane Smith</td>
            <td className="border border-black p-1">34</td>
            <td className="border border-black p-1">Designer</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableWithoutCaption;
