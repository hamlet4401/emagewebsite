import React from "react";

const InfoCard = ({ mainCard, extraCard, mirrored = false }) => {
  return (
    <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        {mirrored ? (
          <>
            <div className="w-full lg:ml-96 pr-8">{mainCard}</div>
            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 bg-blue-900 rounded-2xl">
              <div className="flex flex-col text-white">{extraCard}</div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">{mainCard}</div>
            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
              <div className="flex flex-col text-white">{extraCard}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
