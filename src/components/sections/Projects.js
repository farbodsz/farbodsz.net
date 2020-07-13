import React from "react";
import styles from "./Projects.module.sass";
import Project from "../Project";
import Subheading from "../Subheading";
import pokedataImg from "../../images/pokedata.png";
import cpImg from "../../images/cp_markdown.png";
import timetableImg from "../../images/timetable.png";

export default function Projects() {
  const timetableDesc = `Timetable is an app to help students manage their busy schedules.\\
  For students always late to class, Timetable reminds you of your classes X minutes before they start, configurable in Settings.
  Forgetful students can keep on top of their assignments using the sorted list, colour-coded by subject.
  Notifications are displayed for overdue or incomplete assignments, and once you're done, you can swipe them off the list.\\
  You can also add multiple timetables to the app (e.g. for different years), without deleting your previous data.\\
  Other features include adding exams and notifications, optimized layouts for landscape layouts/tablets, and more.
  `;

  const pokedexDesc = `Pokédex is a database that Pokémon-enthusiasts can browse, filter, and search through to find descriptions and stats of Pokémon.\\
  The app uses a colourful, intuitive design and includes features like being able to compare Pokémon side-by-side.
  `;

  const cpMdDesc = `A simple script to generate a markdown file from competitive programming problems.\\
  The script can be run in a directory containing solutions to CP problems, and using the XML configuration, the script generates an overview of attempted/completed problems.
  This is helpful for those wanting to track their progress as they explore competitive programming or prepare for interviews.
  `;

  return (
    <div className={styles.container}>
      <Subheading text={"Projects"} />
      <Project
        name={"Timetable App"}
        desc={timetableDesc}
        stack={["Kotlin", "Java", "Android", "SQLite"]}
        repo={"https://github.com/farbodsz/TimetableApp"}
        img={timetableImg}
      />
      <Project
        name={"cp-markdown"}
        desc={cpMdDesc}
        stack={["Python"]}
        repo={"https://github.com/farbodsz/cp-markdown"}
        img={cpImg}
      />
      <Project
        name={"Pokédex App"}
        desc={pokedexDesc}
        stack={["Java", "Kotlin", "Android", "SQLite"]}
        repo={"https://github.com/farbodsz/PokedexApp"}
        img={pokedataImg}
      />
    </div>
  );
}
