import * as React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex justify-center mt-6 md:mt-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
