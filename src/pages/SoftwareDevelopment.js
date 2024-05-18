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
      <InfoCard
        mirrored={false}
        mainCard={
          <div className="bg-cover bg-center h-[500px] bg-appDevelopment p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"></div>
        }
        extraCard={
          <ServiceCard
            title="App Development"
            description="Our team excels in crafting mobile apps tailored to your needs. Leveraging Swift, Objective-C, Java, and .NET, we deliver top-tier solutions. Swift powers our sleek iOS apps, ensuring seamless experiences. With Objective-C, we guarantee compatibility and performance in iOS and macOS projects. Java enables versatile Android apps, scalable across devices. Utilizing .NET, we build robust cross-platform solutions. Whether launching or enhancing apps, we innovate to drive your business forward."
            bulletPoints={["Swift", "Objective C", "Java", ".NET"]}
          ></ServiceCard>
        }
      ></InfoCard>
      <InfoCard
        mirrored={true}
        mainCard={
          <div className="bg-cover bg-center h-[500px] bg-embeddedSystems p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"></div>
        }
        extraCard={
          <ServiceCard
            title="Embedded Systems"
            description="Specializing in embedded systems development, we utilize C/C++ to create efficient and reliable solutions. Expertise in C/C++ enables us to design firmware and software for embedded devices, ensuring optimal performance and functionality. From microcontrollers to IoT devices, our customized solutions are tailored to your specific requirements."
            bulletPoints={["C/C++"]}
          ></ServiceCard>
        }
      ></InfoCard>
      <InfoCard
        mirrored={false}
        mainCard={
          <div className="bg-cover bg-center h-[500px] bg-automations p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"></div>
        }
        extraCard={
          <ServiceCard
            title="Automations"
            description="Empowering businesses with streamlined processes, we specialize in automations driven by Python and API integrations. Utilizing the versatility of Python, we develop robust scripts and applications tailored to automate repetitive tasks and optimize workflows. Through seamless API integrations, we connect disparate systems, enabling data exchange and enhancing operational efficiency. From data processing to workflow automation, our solutions are designed to simplify complexities and drive productivity."
            bulletPoints={["Python", "API Integrations"]}
          ></ServiceCard>
        }
      ></InfoCard>

      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
