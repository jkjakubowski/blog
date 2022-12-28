import * as React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`flex justify-center ${className}`}>{children}</div>;
};

export default Container;
