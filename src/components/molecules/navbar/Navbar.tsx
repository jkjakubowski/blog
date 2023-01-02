import * as React from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-dark_blue text-cream flex justify-between px-16 h-20	items-center	">
      <div className="flex items-center">
        <p className="text-5xl mr-2.5">{t("navbar.logo")}</p>
        <p className="text-xl font-title">{t("navbar.title")}</p>
      </div>
      <div className="flex">
        <Link to="/" className="mr-2.5">
          {t("navbar.links.about")}
        </Link>
        <Link to="/articles">{t("navbar.links.articles")}</Link>
      </div>
    </div>
  );
};

export default Navbar;
