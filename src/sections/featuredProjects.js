import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";

const query = graphql`
  query FeaturedProjectsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { fields: frontmatter___endYear, order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          startYear
          endYear
          langs
          imgSrc {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          github
          link
          linkText
        }
      }
    }
  }
`;

function renderProjects(data) {
  return data.allMarkdownRemark.nodes.map((node, idx) => (
    <ProjectItem
      title={node.frontmatter.title}
      startYear={node.frontmatter.startYear}
      endYear={node.frontmatter.endYear}
      langs={node.frontmatter.langs}
      imgSrc={
        node.frontmatter.imgSrc
          ? node.frontmatter.imgSrc.childImageSharp.fluid
          : null
      }
      imgRight={idx % 2}
      github={node.frontmatter.github}
      link={node.frontmatter.link}
      linkText={node.frontmatter.linkText}
    >
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </ProjectItem>
  ));
}

export default function FeaturedProjects() {
  return (
    <Section title="Featured Projects">
      <StaticQuery query={query} render={renderProjects} />
    </Section>
  );
}
