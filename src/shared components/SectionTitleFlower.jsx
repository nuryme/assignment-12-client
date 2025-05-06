import React from 'react';

const SectionTitleFlower = ({title=''}) => {
    return (
        <div>
        <h2 className="uppercase text-center font-playfairDisplay w-fit mx-auto">
          {title}
        </h2>
        <span className="afterStyle relative w-[200px] h-[51px] table m-auto mt-3"></span>
      </div>
    );
};

export default SectionTitleFlower;