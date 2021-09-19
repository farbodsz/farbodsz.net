import React from "react";
import { Helmet } from "react-helmet";

import iconApple from "../assets/favicons/apple-touch-icon.png";
import icon16 from "../assets/favicons/favicon-16x16.png";
import icon32 from "../assets/favicons/favicon-32x32.png";
import favicon from "../assets/favicons/favicon.ico";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { WaveFooter, WaveHeader } from "../components/Waves";
import Experience from "../sections/experience";
import FeaturedProjects from "../sections/featuredProjects";
import OtherProjects from "../sections/otherProjects";
import Skills from "../sections/skills";

export default function Home(): JSX.Element {
  const NAME = "Farbod Salamat-Zadeh";
  const DESC = "Personal website";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{NAME} | CS Student</title>
        <meta name="author" content={NAME} />
        <meta name="description" content={DESC} />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={iconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
      </Helmet>

      <Header />
      <WaveHeader />

      <Layout style={{ marginTop: "-120px" }}>
        <Experience />
        <Skills />
        <FeaturedProjects />
        <OtherProjects />
      </Layout>

      <WaveFooter />
      <Footer />
    </>
  );
}
