import React from "react";

import svgWaveFooter from "../assets/wave_footer.svg";
import svgWaveHeader from "../assets/wave_header.svg";
import * as styles from "./Waves.module.scss";

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
