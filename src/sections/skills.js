import { StaticQuery, graphql } from "gatsby";
import React from "react";

import ListGroup from "../components/ListGroup";
import Section from "../components/Section";
import * as styles from "./skills.module.scss";

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
