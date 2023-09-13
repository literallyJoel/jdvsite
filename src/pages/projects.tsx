import Head from "next/head";
import splashImage from "@src/images/splashlogo.png";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  return (
    <>
      <Head>
        <title>JDVivian - My Projects</title>
        <meta name="description" content="JDVivian" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="font-Montserrat flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-jdvred to-jdvredlight">
        <Image src={splashImage} width={250} height={250} alt="JDVLogo" />
        <span className="pb-8 pt-4 text-3xl text-white">
          {"This bit isn't quite ready yet."}
        </span>
        <a
          href="https://github.com/literallyJoel/"
          target="_blank"
          className="mb-2 w-1/2 rounded-lg bg-[#333] pb-2 pl-2 pr-2 pt-2 text-center text-white opacity-75 transition-all hover:scale-110 hover:bg-emerald-600 md:w-2/12"
        >
          <div className=" flex w-full flex-row items-center justify-center gap-4">
            <BsGithub size={30} />
            <span className="text-sm">Checkout my GitHub in the meantime</span>
          </div>
        </a>
      </main>
    </>
  );
}
