import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Container from "components/atoms/template/Container";
import Title from "components/atoms/typography/Title";

const LastArticles: FC = () => {
  const { t } = useTranslation();
  return (
    <Container className="mt-10 justify-self-start justify-start ">
      <div className="flex flex-col 	justify-start max-w-3xl">
        <div className="justify-self-start	justify-start">
          <Title>{t("index.last_articles.title")}</Title>
        </div>
      </div>
    </Container>
  );
};

export default LastArticles;
