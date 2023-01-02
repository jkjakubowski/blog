import React, { FC } from "react";

import Container from "components/atoms/template/Container";
import DescriptionCard from "components/molecules/DescriptionCard";
import Socials from "./Socials";

const AboutSection = () => {
  return (
    <Container className="mt-10">
      <div className="flex flex-col">
        <DescriptionCard />
        <Socials />
      </div>
    </Container>
  );
};

export default AboutSection;
