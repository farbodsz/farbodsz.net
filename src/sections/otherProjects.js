import { StaticQuery, graphql } from "gatsby";
import React from "react";

import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";
import * as styles from "./otherProjects.module.scss";

const query = graphql`
  query OtherProjectsQuery {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "projects" } }
        frontmatter: { featured: { ne: true } }
      }
      sort: {
        fields: [frontmatter___endYear, frontmatter___startYear]
        order: [DESC, DESC]
      }
    ) {
      nodes {
        html
        frontmatter {
          title
          startYear
          langs
          endYear
          github
          link
        }
      }
    }
  }
`;

function renderProjects(data) {
  return data.allMarkdownRemark.nodes.map((node) => (
    <ProjectItem
      title={node.frontmatter.title}
      startYear={node.frontmatter.startYear}
      endYear={node.frontmatter.endYear}
      langs={node.frontmatter.langs}
      github={node.frontmatter.github}
      link={node.frontmatter.link}
    >
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </ProjectItem>
  ));
}

export default function OtherProjects() {
  return (
    <Section title="Other Projects">
      <div className={styles.otherProjectsContainer}>
        <StaticQuery query={query} render={renderProjects} />
      </div>
    </Section>
  );
}
