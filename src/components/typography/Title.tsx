import * as React from "react";

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-3xl text-orange font-title">{children}</h1>;
};

export default Title;
