import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "components/atoms/template/Container";
import DescriptionCard from "components/molecules/DescriptionCard";
import Button from "components/atoms/template/Button";
import Resume from "assets/cv_jakubowski.pdf";

const WorkSection: FC = () => {
  const { t } = useTranslation();
  return (
    <Container className="mt-10">
      <div className="flex flex-col">
        <DescriptionCard
          title={`${t("index.work.title")}`}
          description={`${t("index.work.description")}`}
          color="bg-orange/50"
        >
          <div className="flex justify-center mt-5">
            <Button href={Resume}>{"View my resume"}</Button>
          </div>
        </DescriptionCard>
      </div>
    </Container>
  );
};

export default WorkSection;
