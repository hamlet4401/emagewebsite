import React from "react";
import InfoCard from "../components/InfoCard";
import ServiceCard from "../components/ServiceCard";

import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const WebDevelopment = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <InfoCard
        mirrored={false}
        mainCard={
          <div className="bg-cover bg-center h-[500px] bg-fullstack p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"></div>
        }
        extraCard={
          <ServiceCard
            title="Full stack development"
            description="Transform your ideas into reality with our cutting-edge custom software development services. Whether you need a web application, mobile app, or enterprise solution, our team of experts is dedicated to delivering tailored solutions that exceed your expectations."
            bulletPoints={[
              "Custom software development",
              "Web and mobile app development",
              "Enterprise solutions",
            ]}
          ></ServiceCard>
        }
      ></InfoCard>
      <InfoCard
        mirrored={true}
        mainCard={
          <div className="bg-cover bg-center h-[500px] bg-frontend p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"></div>
        }
        extraCard={
          <ServiceCard
            title="Front-end development"
            description="Transform your ideas into reality with our cutting-edge custom software development services. Whether you need a web application, mobile app, or enterprise solution, our team of experts is dedicated to delivering tailored solutions that exceed your expectations."
            bulletPoints={[
              "Custom software development",
              "Web and mobile app development",
              "Enterprise solutions",
            ]}
          ></ServiceCard>
        }
      ></InfoCard>
      <InfoCard
        mirrored={false}
        mainCard={
          <div className="bg-cover bg-center h-[500px] bg-backend p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"></div>
        }
        extraCard={
          <ServiceCard
            title="Backend development"
            description="Transform your ideas into reality with our cutting-edge custom software development services. Whether you need a web application, mobile app, or enterprise solution, our team of experts is dedicated to delivering tailored solutions that exceed your expectations."
            bulletPoints={[
              "Custom software development",
              "Web and mobile app development",
              "Enterprise solutions",
            ]}
          ></ServiceCard>
        }
      ></InfoCard>
      <InfoCard
        mirrored={true}
        mainCard={
          <div className="bg-cover bg-center h-[500px] bg-uiUx p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"></div>
        }
        extraCard={
          <ServiceCard
            title="UI/UX"
            description="Transform your ideas into reality with our cutting-edge custom software development services. Whether you need a web application, mobile app, or enterprise solution, our team of experts is dedicated to delivering tailored solutions that exceed your expectations."
            bulletPoints={[
              "Custom software development",
              "Web and mobile app development",
              "Enterprise solutions",
            ]}
          ></ServiceCard>
        }
      ></InfoCard>
      <Footer />
    </>
  );
};

export default WebDevelopment;
