import * as React from "react";

import { useTranslation } from "react-i18next";

const Signature = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <p className="text-5xl mr-2.5">{t("navbar.logo")}</p>
      <p className=" text-2xl md:text-xl md: font-title">{t("navbar.title")}</p>
    </div>
  );
};

export default Signature;
