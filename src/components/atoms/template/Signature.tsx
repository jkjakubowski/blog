import * as React from "react";
import { useTranslation } from "react-i18next";

import wolf from "assets/images/wolf.png";

const Signature = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <img className="w-12 h-12 md:w-16 md:h-16 mr-2.5" src={wolf} />
      <p className=" text-xl font-title">{t("navbar.title")}</p>
    </div>
  );
};

export default Signature;
