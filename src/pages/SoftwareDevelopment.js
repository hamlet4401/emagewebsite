import React from "react";
import InfoCard from "../components/InfoCard";
import ServiceCard from "../components/ServiceCard";

import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const SoftwareDevelopment = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="w-full overflow-hidden">
        <InfoCard
          mirrored={false}
          mainCard={
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-appDevelopment rounded-2xl shadow-2xl"></div>
          }
          extraCard={
            <ServiceCard
              title="App Development"
              description="At E-mage, we transform your ideas into exceptional mobile applications for any platform. Our expert team delivers high-quality, user-friendly apps tailored to your specific business needs. "
            ></ServiceCard>
          }
        ></InfoCard>
        <InfoCard
          mirrored={true}
          mainCard={
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-embeddedSystems rounded-2xl shadow-2xl"></div>
          }
          extraCard={
            <ServiceCard
              title="Embedded Systems"
              description="Embedded systems are specialized computing systems designed for dedicated functions within larger systems. We design firmware and software to optimize performance for microcontrollers and IoT devices, meeting your unique requirements."
            ></ServiceCard>
          }
        ></InfoCard>
        <InfoCard
          mirrored={false}
          mainCard={
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-automations rounded-2xl shadow-2xl"></div>
          }
          extraCard={
            <ServiceCard
              title="Automations"
              description="Empowering businesses with streamlined processes, we specialize in automations tailored to optimize workflows and drive productivity. Our solutions simplify complexities and automate repetitive tasks, enhancing operational efficiency from data processing to workflow management."
            ></ServiceCard>
          }
        ></InfoCard>
      </div>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
