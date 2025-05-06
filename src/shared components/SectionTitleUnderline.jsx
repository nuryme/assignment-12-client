import React from "react";

const SectionTitleUnderline = ({ before = "", underline = "", after = "" }) => {
  return (
    <h2 className="uppercase text-center font-playfairDisplay ">
      {before}
      <span className="relative curved-underline mx-2"> {underline}</span> {after}
    </h2>
  );
};

export default SectionTitleUnderline;
