import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FunctionComponent<SectionProps> = (props) => (
  <div>
    <h2>{props.title}</h2>
    {props.children}
  </div>
);

export default Section;
