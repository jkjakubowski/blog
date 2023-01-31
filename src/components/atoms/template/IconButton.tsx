import React from "react";

type IconButtonProps = {
  href?: string;
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = ({ children, href }) => {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};

export default IconButton;
