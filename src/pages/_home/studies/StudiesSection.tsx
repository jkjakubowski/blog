import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "components/atoms/template/Container";
import DescriptionCard from "components/molecules/DescriptionCard";

const StudiesSection: FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="flex flex-col">
        <DescriptionCard
          title={`${t("index.studies.title")}`}
          description={`${t("index.studies.description")}`}
          color="bg-twitter_blue/30"
        />
      </div>
    </Container>
  );
};

export default StudiesSection;
