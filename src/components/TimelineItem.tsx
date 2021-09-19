import React from "react";

import svgTimelineEnd from "../assets/timeline_line_end.svg";
import svgTimelineStart from "../assets/timeline_line_start.svg";
import svgTimeline from "../assets/timeline_line.svg";
import { formatYears } from "../utils";
import * as styles from "./TimelineItem.module.scss";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  startYear?: number;
  endYear?: number;
  isFirst: boolean;
  isLast: boolean;
}

export default class TimelineItem extends React.Component<TimelineItemProps> {
  constructor(props: TimelineItemProps) {
    super(props);
  }

  render() {
    const graphicSrc = this.props.isFirst
      ? svgTimelineStart
      : this.props.isLast
      ? svgTimelineEnd
      : svgTimeline;

    return (
      <div className={styles.container}>
        <div className={styles.lineContainer}>
          <p className={styles.lineYears}>
            {formatYears(this.props.startYear, this.props.endYear, false)}
          </p>
          <img
            className={styles.lineGraphic}
            src={graphicSrc}
            alt="timeline-line"
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <h3>{this.props.title}</h3>
            <h4 className={styles.subtitle}>{this.props.subtitle}</h4>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
