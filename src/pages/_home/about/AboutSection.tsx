import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "components/atoms/template/Container";
import DescriptionCard from "components/molecules/DescriptionCard";
import Socials from "components/molecules/Socials";

const AboutSection: FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="flex flex-col">
        <DescriptionCard
          title={`${t("index.about.title")}`}
          description={`${t("index.about.description")}`}
          color="bg-purple/30"
        />
        <Socials />
      </div>
    </Container>
  );
};

export default AboutSection;
