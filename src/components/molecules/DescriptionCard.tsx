import * as React from "react";
import Title from "../atoms/typography/Title";

const DescriptionCard = () => {
  return (
    <div className="bg-purple bg-opacity-10 rounded-xl py-7 px-16 max-w-3xl">
      <div className="flex justify-center 	">
        <Title>Toto</Title>
        <Title>Toto</Title>
      </div>
      <div>
        <p>
          I’m a French product developer, based in Paris. I studied computer
          science, design & PM. I’ve worked at several startups, learning how to
          create useful products and features bringing value to users.
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;
