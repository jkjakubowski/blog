import React from "react";

type ButtonProps = {
  type: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  let buttonClasses;
  switch (type) {
    case "primary":
      buttonClasses = "bg-purple text-beige";
      break;
    case "linkedin":
      buttonClasses =
        "bg-dark_blue hover:bg-beige  text-cream hover:text-dark_blue  duration-300 transition ease-out";
      break;
    case "twitter":
      buttonClasses =
        "bg-beige hover:bg-dark_blue text-dark_blue hover:text-beige border border-dark_blue duration-300 transition ease-out";
      break;
    case "github":
      buttonClasses =
        "bg-transparent hover:bg-purple text-purple hover:text-beige border border-purple duration-300 transition ease-out";
  }
  return (
    <button
      className={`${buttonClasses} font-semibold  text-2xl py-2 px-4 rounded-lg self-center shadow duration-300 transition ease-out`}
    >
      {children}
    </button>
  );
};

export default Button;
