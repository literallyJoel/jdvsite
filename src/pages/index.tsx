import Head from "next/head";
import splashImage from "@src/images/splashlogo.png";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>JDVivian</title>
        <meta name="description" content="JDVivian" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-jdvred to-jdvredlight">
        <Image src={splashImage} width={250} height={250} alt="JDVLogo" />
        <span className="pt-4 text-4xl text-white">{"Hi, I'm Joel."}</span>
        <span className="pt-1 text-2xl text-white">
          {"I'm a software developer."}
        </span>
        <div className="flex flex-row gap-4 pt-2 text-white">
          <Link
            href="/ocv"
            className="group relative inline-block cursor-pointer transition hover:scale-110"
          >
            Online CV
            <span className="absolute bottom-0 left-0 h-[0.5%] w-full origin-left transform bg-white transition-all group-hover:bg-emerald-400"></span>
          </Link>

          <span className="group relative inline-block cursor-pointer transition hover:scale-110">
            Download CV ▾
            <span className="absolute bottom-0 left-0 h-[0.5%] w-full origin-left transform bg-white group-hover:hidden"></span>
            <div className="invisible  absolute w-full -translate-y-1/4 flex-col rounded-b-md bg-white transition-transform duration-300 group-hover:visible group-hover:flex group-hover:translate-y-0">
              <span className="p-4 text-sm text-black transition-colors hover:bg-jdvred hover:text-white">
                Word
              </span>
              <span className="tranisiton-colors rounded-b-md p-4 text-sm text-black  hover:bg-jdvred hover:text-white">
                PDF
              </span>
            </div>
          </span>

          <span className="group relative inline-block cursor-pointer transition hover:scale-110">
            My Projects
            <span className="absolute bottom-0 left-0 h-[0.5%] w-full origin-left transform bg-white transition-all group-hover:bg-emerald-400"></span>
          </span>
        </div>

        <a
          href="https://github.com/literallyJoel/jdvsite"
          target="_blank"
          className="absolute bottom-0 mb-2 w-2/12 rounded-lg bg-[#333] pb-2 pl-2 pr-2 pt-2 text-center text-white opacity-75 transition-all hover:scale-110 hover:bg-emerald-600"
        >
          <div className="flex flex-row items-center justify-center gap-4">
            <BsGithub />
            View this site on GitHub
          </div>
        </a>
      </main>
    </>
  );
}
