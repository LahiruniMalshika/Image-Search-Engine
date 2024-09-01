import React from "react";
import Masonry from "react-masonry-css";
import Image from "./Image";
import Images from "./images";

const MasonryGrid = ({ img }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto"
      columnClassName="masonry-grid-column"
    >
      {img.map((data, index) => (
        <div key={index} className="mb-4">
          <Image data={data} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
