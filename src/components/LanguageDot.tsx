import { StaticQuery, graphql } from "gatsby";
import React from "react";

import * as styles from "./LanguageDot.module.scss";

/*
 * Language type and query
 */

interface Language {
  langName: string;
  color: string;
}

const query = graphql`
  query LanguageQuery {
    allLanguagesJson {
      nodes {
        langName
        color
      }
    }
  }
`;

/*
 * LanguageDot component
 */

interface LanguageDotProps {
  langName: string;
}

const LanguageDot: React.FunctionComponent<LanguageDotProps> = (props) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <span
        className={styles.dot}
        style={{
          background: colorOrDefault(
            data.allLanguagesJson.nodes.find(
              (node: Language) =>
                node.langName.toLowerCase() === props.langName.toLowerCase()
            )
          ),
        }}
      ></span>
    )}
  />
);

/**
 * Returns the hex code of the language's color if language is not undefined,
 * otherwise returns black
 */
function colorOrDefault(lang?: Language): string {
  return lang === undefined ? "#000000" : lang.color;
}

export default LanguageDot;
