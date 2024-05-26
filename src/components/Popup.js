import React from "react";

const PopUp = ({ openPopUp, closePopUp, title, text }) => {
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  return (
    <div
      onTransitionEnd={handlelosePopUp}
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 fixed transition delay-1000 -translate-y-60"
      role="alert"
    >
      <span class="absolute flex h-3 w-3 -top-2 -left-1">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
      </span>
      <p class="font-bold">{title}</p>
      <p class="text-sm">{text}</p>
    </div>
  );
};

export default PopUp;
