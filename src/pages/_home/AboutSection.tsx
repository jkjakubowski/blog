import React, { FC } from "react";

import Button from "../../components/atoms/template/Button";
import Container from "../../components/atoms/template/Container";
import DescriptionCard from "../../components/molecules/DescriptionCard";

import twitterIcon from "../../assets/icons/icon-twitter.svg";
import linkedinIcon from "../../assets/icons/icon-linkedin.svg";
import githubIcon from "../../assets/icons/icon-github.svg";

const AboutSection = () => {
  return (
    <Container className="mt-10">
      <div className="flex flex-col">
        <DescriptionCard />
        <div className="flex justify-center mt-10 space-x-8">
          <Button type="linkedin">
            <img className="stroke-cream" src={linkedinIcon}></img>
            LinkedIn
          </Button>
          <Button type="twitter">
            <img className="stroke-cream" src={twitterIcon}></img>Twitter
          </Button>
          <Button type="github">
            <img className="stroke-cream" src={githubIcon}></img>Github
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
