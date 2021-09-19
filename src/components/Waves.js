import React from "react";
import * as styles from "./Waves.module.scss";

import svgWaveHeader from "../assets/wave_header.svg";
import svgWaveFooter from "../assets/wave_footer.svg";

export const WaveHeader = (props) => (
  <img
    className={styles.waveHeader}
    src={svgWaveHeader}
    alt="wave-header"
    {...props}
  />
);

export const WaveFooter = (props) => (
  <img
    className={styles.waveFooter}
    src={svgWaveFooter}
    alt="wave-footer"
    {...props}
  />
);
