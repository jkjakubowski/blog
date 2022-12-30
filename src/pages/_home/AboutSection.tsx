import React, { FC } from "react";

import Button from "../../components/atoms/template/Button";
import Container from "../../components/atoms/template/Container";
import DescriptionCard from "../../components/molecules/DescriptionCard";

import GithubIcon from "../../assets/icons/github_icon.tsx";
import TwitterIcon from "../../assets/icons/twitter_icon.tsx";
import LinkedinIcon from "../../assets/icons/linkedin_icon.tsx";

const AboutSection = () => {
  return (
    <Container className="mt-10">
      <div className="flex flex-col">
        <DescriptionCard />
        <div className="flex justify-center mt-10 space-x-8">
          <Button
            href="https://www.linkedin.com/in/jankasperjakubowski/"
            type="linkedin"
          >
            <LinkedinIcon color="group-hover:stroke-cream" />
            LinkedIn
          </Button>
          <Button href="https://twitter.com/jkjkb6" type="twitter">
            <TwitterIcon color="group-hover:stroke-cream " />
            Twitter
          </Button>
          <Button href="https://github.com/jkjakubowski" type="github">
            <GithubIcon color="group-hover:stroke-beige" />
            Github
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
