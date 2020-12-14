import React from "react";
import { StaticQuery, graphql } from "gatsby";

import styles from "./skills.module.scss";

import ListGroup from "../components/ListGroup";
import Section from "../components/Section";

const query = graphql`
  query SkillsQuery {
    allSkillsJson {
      nodes {
        groupName
        items
      }
    }
  }
`;

function renderSkills(data) {
  return data.allSkillsJson.nodes.map((node) => (
    <ListGroup groupName={node.groupName} items={node.items} />
  ));
}

export default function Skills() {
  return (
    <Section title="Skills">
      <div className={styles.skillsContainer}>
        <StaticQuery query={query} render={renderSkills} />
      </div>
    </Section>
  );
}
