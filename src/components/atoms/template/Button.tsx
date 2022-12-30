import React from "react";

type ButtonProps = {
  type: string;
  href: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, children, href }) => {
  let buttonClasses;
  switch (type) {
    case "primary":
      buttonClasses = "bg-purple text-beige";
      break;
    case "linkedin":
      buttonClasses =
        "bg-beige hover:bg-dark_blue  text-dark_blue hover:text-cream border border-dark_blue duration-300 transition ease-out";
      break;
    case "twitter":
      buttonClasses =
        "bg-beige hover:bg-dark_blue text-dark_blue hover:text-cream border border-dark_blue duration-300 transition ease-out";
      break;
    case "github":
      buttonClasses =
        "bg-transparent hover:bg-purple text-purple hover:text-beige border border-purple duration-300 transition ease-out";
  }
  return (
    <a
      href={href}
      target="_blank"
      className={`group flex cursor-pointer justify-center ${buttonClasses} gap-x-2 font-semibold  text-xl py-2 px-4 rounded-lg self-center shadow duration-300 transition ease-out`}
    >
      {children}
    </a>
  );
};

export default Button;
