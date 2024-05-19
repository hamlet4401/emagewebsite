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
      <div className="w-full overflow-hidden">
        <InfoCard
          mirrored={false}
          mainCard={
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-fullstack rounded-2xl shadow-2xl"></div>
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
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-frontend rounded-2xl shadow-2xl"></div>
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
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-backend rounded-2xl shadow-2xl"></div>
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
            <div className="bg-cover h-[500px] w-full sm:w-9/12 bg-uiUx rounded-2xl shadow-2xl"></div>
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
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
