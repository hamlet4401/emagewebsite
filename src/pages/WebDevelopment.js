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
              description="Full stack development involves building both the front-end and back-end components of a website or application. With expertise in full stack development, we deliver comprehensive solutions covering both front-end and back-end aspects, ensuring seamless and scalable applications tailored to your needs."
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
              description="Front end development is dedicated to crafting the user-facing aspects of websites and applications. Transforming ideas into captivating digital experiences, our front end development services ensure intuitive user interfaces that engage and delight. "
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
              description="Backend development creates the server-side logic and databases for websites and applications. Powering your digital infrastructure, we create robust, scalable solutions tailored to your specific needs. From database management to server optimization, we ensure seamless functionality behind the scenes, allowing your platform to thrive."
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
              description="UI/UX design focuses on creating intuitive and visually appealing interfaces for websites and applications. Elevate user experiences with our UI/UX design expertise. We craft intuitive interfaces that engage users and drive interaction, ensuring your digital presence stands out from the crowd."
            ></ServiceCard>
          }
        ></InfoCard>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
