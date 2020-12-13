import React from "react";
import { Helmet } from "react-helmet";

import Frame from "../components/Frame";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";

import favicon from "../icons/favicons/favicon.ico";
import iconApple from "../icons/favicons/apple-touch-icon.png";
import icon16 from "../icons/favicons/favicon-16x16.png";
import icon32 from "../icons/favicons/favicon-32x32.png";

import pokedataImg from "../images/pokedata.png";

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

      <Frame>
        <Header />
        <Intro />

        <Section title="Projects">
          <ProjectItem
            title="Pokédex App"
            startYear={2016}
            endYear={2017}
            langs={["Java", "Kotlin", "Android", "SQLite"]}
            imgSrc={pokedataImg}
            github="https://github.com/farbodsz/PokedexApp"
          >
            <p>
              Pokédex is a database that Pokémon-enthusiasts can browse, filter,
              and search through to find descriptions and stats of Pokémon.
            </p>
            <p>
              The app uses a colourful, intuitive design and includes features
              like being able to compare Pokémon side-by-side.
            </p>
          </ProjectItem>
        </Section>
      </Frame>

      <Footer />
    </div>
  );
}
