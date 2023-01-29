import * as React from "react";

import GithubIcon from "assets/icons/github_icon";
import TwitterIcon from "assets/icons/twitter_icon";
import LinkedinIcon from "assets/icons/linkedin_icon";
import HomeIcon from "assets/icons/home_icon";
import ArticlesIcon from "assets/icons/articles_icon";

const MobileNavbar = () => {
  return (
    <div className="md:hidden fixed text-center	translate-x-2/4 w-[calc(100%-100px)] right-1/2 flex justify-between  bottom-10 bg-dark_blue rounded-xl py-4 px-4">
      <div className="flex gap-x-3">
        <HomeIcon color="stroke-beige" />
        <ArticlesIcon color="fill-beige stroke-beige" />
      </div>
      <div className="flex gap-x-3">
        <LinkedinIcon color="stroke-beige" />
        <TwitterIcon color="stroke-beige" />
        <GithubIcon color="stroke-beige" />
      </div>
    </div>
  );
};

export default MobileNavbar;
