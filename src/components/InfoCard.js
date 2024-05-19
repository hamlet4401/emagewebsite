import React from "react";

const InfoCard = ({ mainCard, extraCard, mirrored = false }) => {
  return (
    <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        {mirrored ? (
          <>
            <div className="w-full flex justify-end">{mainCard}</div>
            <div className="w-full flex justify-start">
              <div className="w-4/6 xl:-mt-96 -mt-20 xl:w-2/6 px-8 py-6 bg-blue-900 rounded-2xl">
                <div className="flex flex-col text-white">{extraCard}</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex justify-start">{mainCard}</div>
            <div className="w-full flex justify-end">
              <div className="w-4/6 xl:-mt-96 -mt-20 xl:w-2/6 px-8 py-6 bg-blue-900 rounded-2xl">
                <div className="flex flex-col text-white">{extraCard}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
