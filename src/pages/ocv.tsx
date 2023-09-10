import AboutMe from "@src/ocv/AboutMe";
import Experience from "@src/ocv/Experience";
import SideBar from "@src/ocv/SideBar";
import Head from "next/head";
import { useState } from "react";
export type ViewMode = "about" | "skills" | "education" | "experience";

const OCV = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<ViewMode>("about");
  return (
    <>
      <Head>
        <title>JDVivian - CV</title>
        <meta name="description" content="JDVivian - CV" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="font-montserrat max-flex-row flex min-h-full bg-gradient-to-b from-jdvred to-jdvredlight">
        <SideBar viewMode={viewMode} setViewMode={setViewMode} />
        {viewMode === "about" && <AboutMe />}
        {viewMode === "experience" && <Experience />}
      </main>
    </>
  );
};

export default OCV;
