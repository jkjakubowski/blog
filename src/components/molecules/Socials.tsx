import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Button from "components/atoms/template/Button";
import GithubIcon from "assets/icons/github_icon";
import TwitterIcon from "assets/icons/twitter_icon";
import LinkedinIcon from "assets/icons/linkedin_icon";

const Socials: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="hidden md:flex justify-center mt-10 space-x-8">
      <Button
        href="https://www.linkedin.com/in/jankasperjakubowski/"
        type="linkedin"
      >
        <LinkedinIcon color="group-hover:stroke-cream stroke-dark_blue" />
        {t("socials.linkedin")}
      </Button>
      <Button href="https://twitter.com/jkjkb6" type="twitter">
        <TwitterIcon color="group-hover:stroke-cream stroke-twitter_blue" />
        {t("socials.twitter")}
      </Button>
      <Button href="https://github.com/jkjakubowski" type="github">
        <GithubIcon color="group-hover:stroke-beige stroke-purple" />
        {t("socials.github")}
      </Button>
    </div>
  );
};
export default Socials;
