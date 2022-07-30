import { StaticQuery, graphql } from "gatsby";
import React from "react";

import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";

const query = graphql`
  query ExperienceQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "experience" } } }
      sort: { fields: frontmatter___endYear, order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          place
          startYear
          endYear
        }
      }
    }
  }
`;

function renderExperience(data) {
  const lastIdx = data.allMarkdownRemark.nodes.length - 1;

  return data.allMarkdownRemark.nodes.map((node, idx) => (
    <TimelineItem
      key={idx}
      title={node.frontmatter.title}
      subtitle={`@ ${node.frontmatter.place}`}
      startYear={node.frontmatter.startYear}
      endYear={node.frontmatter.endYear}
      isFirst={idx === 0}
      isLast={idx === lastIdx}
    >
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </TimelineItem>
  ));
}

export default function Experience() {
  return (
    <Section title="Relevant Experience">
      <StaticQuery query={query} render={renderExperience} />
    </Section>
  );
}
