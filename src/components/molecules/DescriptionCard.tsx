import * as React from "react";
import { useTranslation } from "react-i18next";

import Title from "components/atoms/typography/Title";

const DescriptionCard = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-purple bg-opacity-10 rounded-xl py-7 px-16 max-w-3xl">
      <div className="flex justify-center 	">
        <Title>{t("index.about.title")}</Title>
      </div>
      <div>
        <p>{t("index.about.description")}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
