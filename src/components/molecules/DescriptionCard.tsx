import * as React from "react";

import Title from "components/atoms/typography/Title";
import { Trans } from "react-i18next";

type DescriptionCardProps = {
  title: string;
  description: string;
  color: string;
  opacity?: string;
  children?: React.ReactNode;
};

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  description,
  color,
  children,
}) => {
  return (
    <div className={`${color} rounded-xl py-7 px-20 max-w-3xl`}>
      <div className="flex justify-center 	">
        <Title>{title}</Title>
      </div>
      <div className="mt-3">
        <Trans i18nKey={description} />
        {children && children}
      </div>
    </div>
  );
};

export default DescriptionCard;
