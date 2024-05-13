import React from "react";
import InfoCard from "../components/InfoCard";
import ServiceCard from "../components/ServiceCard";

import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

import img from "../images/web.svg";
import img2 from "../images/embedded systems.jpg";
import img3 from "../images/automation.jpg";
import img4 from "../images/app development.jpg";

const SoftwareDevelopment = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <InfoCard
        mirrored={false}
        mainCard={
          <div className="w-full flex justify-center bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img4}
            />
          </div>
        }
        extraCard={
          <ServiceCard
            title="App Development"
            description="Transform your ideas into reality with our cutting-edge custom software development services. Whether you need a web application, mobile app, or enterprise solution, our team of experts is dedicated to delivering tailored solutions that exceed your expectations."
            bulletPoints={["Swift", "Objective C", "Java", ".NET"]}
          ></ServiceCard>
        }
      ></InfoCard>
      <InfoCard
        mirrored={true}
        mainCard={
          <div className="w-full flex justify-center bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img2}
            />
          </div>
        }
        extraCard={
          <ServiceCard
            title="Embedded Systems"
            description="Transform your ideas into reality with our cutting-edge custom software development services. Whether you need a web application, mobile app, or enterprise solution, our team of experts is dedicated to delivering tailored solutions that exceed your expectations."
            bulletPoints={["C/C++"]}
          ></ServiceCard>
        }
      ></InfoCard>
      <InfoCard
        mirrored={false}
        mainCard={
          <div className="w-full flex justify-center bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img3}
            />
          </div>
        }
        extraCard={
          <ServiceCard
            title="Automations"
            description="Transform your ideas into reality with our cutting-edge custom software development services. Whether you need a web application, mobile app, or enterprise solution, our team of experts is dedicated to delivering tailored solutions that exceed your expectations."
            bulletPoints={["Python", "API Integrations"]}
          ></ServiceCard>
        }
      ></InfoCard>

      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
