import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Button from "components/atoms/template/Button";
import Container from "components/atoms/template/Container";
import DescriptionCard from "components/molecules/DescriptionCard";

import GithubIcon from "assets/icons/github_icon";
import TwitterIcon from "assets/icons/twitter_icon";
import LinkedinIcon from "assets/icons/linkedin_icon";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <Container className="mt-10">
      <div className="flex flex-col">
        <DescriptionCard />
        <div className="flex justify-center mt-10 space-x-8">
          <Button
            href="https://www.linkedin.com/in/jankasperjakubowski/"
            type="linkedin"
          >
            <LinkedinIcon color="group-hover:stroke-cream stroke-dark_blue" />
            {t("socials.linkedin")}
          </Button>
          <Button href="https://twitter.com/jkjkb6" type="twitter">
            <TwitterIcon color="group-hover:stroke-cream stroke-dark_blue" />
            {t("socials.twitter")}
          </Button>
          <Button href="https://github.com/jkjakubowski" type="github">
            <GithubIcon color="group-hover:stroke-beige stroke-purple" />
            {t("socials.github")}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
