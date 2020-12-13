import React from "react";
import { Helmet } from "react-helmet";

import styles from "./index.module.scss";

import Frame from "../components/Frame";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";
import ListGroup from "../components/ListGroup";

import favicon from "../icons/favicons/favicon.ico";
import iconApple from "../icons/favicons/apple-touch-icon.png";
import icon16 from "../icons/favicons/favicon-16x16.png";
import icon32 from "../icons/favicons/favicon-32x32.png";

import pokedataImg from "../images/pokedata.png";
import rsaWebsiteImg from "../images/rsa_website.png";
import stockGameImg from "../images/stocks_game.png";
import timetableImg from "../images/timetable.png";

const SkillsSection = () => (
  <Section title="Skills">
    <div className={styles.skillsContainer}>
      <ListGroup
        groupName="Languages"
        items={[
          "Java",
          "Kotlin",
          "Python",
          "C++",
          "SQL",
          "JavaScript",
          "CSS/Sass",
        ]}
      />
      <ListGroup
        groupName="Frameworks"
        items={["Android APIs", "React", "Gatsby", "Node"]}
      />
      <ListGroup
        groupName="Tools"
        items={["Maven & Gradle", "Bash", "Git & GitHub"]}
      />
    </div>
  </Section>
);

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

        <SkillsSection />

        <Section title="Projects">
          <ProjectItem
            title="Stock Trading Game"
            endYear={2020}
            langs={["JavaScript", "React", "Python", "Django", "SCSS"]}
            imgSrc={stockGameImg}
            imgRight={0}
            github="https://github.com/farbodsz/stock-app"
          >
            <p>
              A stock trading game with a twist, built with a friend over the
              summer.
            </p>
            <p>
              People invest in stocks to gain money. So we thought, what are the
              best strategies to lose money on the stock exchange?
            </p>
            <p>
              The stock trading game is a virtual stock trading platform where
              the goal is to lose the most amount of money. Each investor starts
              with an initial sum of one million dollars and can purchase stocks
              of their choosing from the NASDAQ index.
            </p>
          </ProjectItem>

          <ProjectItem
            title="Student Timetable App"
            startYear={2016}
            endYear={2017}
            langs={["Kotlin", "Java", "Android", "SQLite"]}
            imgSrc={timetableImg}
            imgRight={1}
            github="https://github.com/farbodsz/TimetableApp"
          >
            <p>
              Timetable is an app to help students manage their busy schedules.
            </p>
            <p>
              For students always late to class, Timetable reminds you of your
              classes X minutes before they start, configurable in Settings.
              Forgetful students can keep on top of their assignments using the
              sorted list, colour-coded by subject. Notifications are displayed
              for overdue or incomplete assignments, and once you're done, you
              can swipe them off the list.
            </p>
          </ProjectItem>

          <ProjectItem
            title="RSA Website"
            endYear={2020}
            langs={["JavaScript", "React", "SASS"]}
            imgSrc={rsaWebsiteImg}
            imgRight={0}
            github="https://github.com/shintaroonuma/rsa-project"
            link="https://rsa-demo.netlify.app"
          >
            <p>
              A website demonstrating RSA encryption, built with a React-driven
              technology stack.
            </p>
            <p>
              Users can enter prime numbers to generate public and private keys,
              in order to encrypt their message. Using the same keys, the
              ciphertext can be decypted to go back to the original plaintext.
            </p>
          </ProjectItem>

          <ProjectItem
            title="Pokédex App"
            startYear={2016}
            endYear={2017}
            langs={["Java", "Kotlin", "Android", "SQLite"]}
            imgSrc={pokedataImg}
            imgRight={1}
            github="https://github.com/farbodsz/PokedexApp"
          >
            <p>
              A database that Pokémon-enthusiasts can browse, filter, and search
              through to find descriptions and stats of Pokémon.
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
