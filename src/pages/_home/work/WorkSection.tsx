import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "components/atoms/template/Container";
import DescriptionCard from "components/molecules/DescriptionCard";

const WorkSection: FC = () => {
  const { t } = useTranslation();
  return (
    <Container className="mt-10">
      <div className="flex flex-col">
        <DescriptionCard
          title={`${t("index.work.title")}`}
          description={`${t("index.work.description")}`}
          color="bg-orange/50"
        />
      </div>
    </Container>
  );
};

export default WorkSection;
