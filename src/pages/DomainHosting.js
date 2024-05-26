import React from "react";
import InfoCard from "../components/InfoCard";
import ServiceCard from "../components/ServiceCard";

import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const DomainHosting = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="w-full overflow-hidden">
        <InfoCard
          mirrored={false}
          mainCard={
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-noWorries rounded-2xl shadow-2xl"></div>
          }
          extraCard={
            <ServiceCard
              title="No worries"
              description="Relax and leave the technicalities to us. With our expertise, your project is in capable hands, allowing you to focus on what matters most to you."
            ></ServiceCard>
          }
        ></InfoCard>
        <InfoCard
          mirrored={true}
          mainCard={
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-noOverpay rounded-2xl shadow-2xl"></div>
          }
          extraCard={
            <ServiceCard
              title="Don't overpay"
              description="Rest assured, we prioritize efficiency and cost-effectiveness in our solutions. With us, you get top-notch quality without breaking the bank, ensuring you never overpay for excellence."
            ></ServiceCard>
          }
        ></InfoCard>
      </div>
      <Footer />
    </>
  );
};

export default DomainHosting;
