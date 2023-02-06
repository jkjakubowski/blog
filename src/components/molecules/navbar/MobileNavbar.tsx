import * as React from "react";

import { Link } from "gatsby";
import IconButton from "components/atoms/template/IconButton";

import GithubIcon from "assets/icons/github_icon";
import TwitterIcon from "assets/icons/twitter_icon";
import LinkedinIcon from "assets/icons/linkedin_icon";
import HomeIcon from "assets/icons/home_icon";
import ArticlesIcon from "assets/icons/articles_icon";
import SunIcon from "assets/icons/sun_icon";
import MoonIcon from "assets/icons/moon_icon";
import TranslateIcon from "assets/icons/translate_icon";

const MobileNavbar = () => {
  return (
    <div
      className="md:hidden 
    fixed 
    text-center	
    translate-x-2/4 
    w-[calc(100%-20px)] 
    right-1/2 
    flex 
    justify-between  
    items-center
    bottom-10 bg-dark_blue rounded-xl py-4 px-4"
    >
      <div className="flex gap-x-3">
        <Link to="/">
          <HomeIcon size="35" color="stroke-beige fill-beige	" />
        </Link>
        <Link to="/articles">
          <ArticlesIcon size="35" color="fill-beige stroke-beige" />
        </Link>
      </div>
      <div className="hidden min-[380px]:block w-px bg-beige/30 h-7" />
      <div className="flex gap-x-3">
        <IconButton>
          <MoonIcon size="35" color="fill-beige" />
        </IconButton>

        <IconButton>
          <TranslateIcon size="35" color="fill-beige" />
        </IconButton>
      </div>
      <div className="hidden min-[380px]:block w-px bg-beige/30 h-7" />
      <div className="flex gap-x-3">
        <IconButton href="https://www.linkedin.com/in/jankasperjakubowski/">
          <LinkedinIcon size="35" color="stroke-beige" />
        </IconButton>

        <IconButton href="https://twitter.com/jkjkb6">
          <TwitterIcon size="35" color="stroke-beige" />
        </IconButton>

        <IconButton href="https://github.com/jkjakubowski">
          <GithubIcon size="35" color="stroke-beige" />
        </IconButton>
      </div>
    </div>
  );
};

export default MobileNavbar;
