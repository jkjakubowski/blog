import * as React from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

import Signature from "components/atoms/template/Signature";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed hidden inset-0 bg-dark_blue text-dark_blue md:text-cream md:flex justify-between px-16 h-20	items-center	">
      <Signature />
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
