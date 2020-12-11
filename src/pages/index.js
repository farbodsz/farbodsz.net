import React from "react";

import { Helmet } from "react-helmet";

import favicon from "../icons/favicons/favicon.ico";
import iconApple from "../icons/favicons/apple-touch-icon.png";
import icon16 from "../icons/favicons/favicon-16x16.png";
import icon32 from "../icons/favicons/favicon-32x32.png";

export default function Home() {
  const NAME = "Farbod Salamat-Zadeh";
  const DESC =
    "Hi, my name is " +
    NAME +
    ". I'm currently a second year " +
    "Computer Science student at the University of Warwick,";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{NAME} | CS Student</title>
        <meta name="author" content={NAME} />
        <meta name="description" content={DESC} />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={iconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
      </Helmet>

      <p>Hello World</p>
    </div>
  );
}
