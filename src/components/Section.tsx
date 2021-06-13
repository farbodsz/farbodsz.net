import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FunctionComponent<SectionProps> = (props) => (
  <div>
    <h2>{props.title}</h2>
    {props.children}
  </div>
);

export default Section;
