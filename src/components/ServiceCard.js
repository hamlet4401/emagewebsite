import React from "react";

const ServiceCard = ({ title, description, bulletPoints }) => {
  return (
    <div className="max-w-xl flex my-4">
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        {bulletPoints && (
          <ul className="list-disc pl-6">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-base">
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
