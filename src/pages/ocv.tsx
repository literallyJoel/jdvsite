import AboutMe from "@src/ocv/AboutMe";
import Experience from "@src/ocv/Experience";
import SideBar from "@src/ocv/SideBar";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Skills from "@src/ocv/Skills";
import Education from "@src/ocv/Education";
export type ViewMode = "about" | "skills" | "education" | "experience";

const OCV = (): JSX.Element => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "";
  return (
    <>
      <Head>
        <title>JDVivian - CV</title>
        <meta name="description" content="JDVivian - CV" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="font-montserrat max-flex-row flex min-h-full bg-gradient-to-b from-jdvred to-jdvredlight">
        <SideBar />
        {page === "about" && <AboutMe />}
        {page === "experience" && <Experience />}
        {page === "skills" && <Skills/>}
        {page === "education" && <Education/>}
      </main>
    </>
  );
};

export default OCV;
