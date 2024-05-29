import Head from "next/head";
import splashImage from "@/assets/img/splashlogo.png";
import Image, { StaticImageData } from "next/image";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";
import jdvsite from "@/assets/img/gitsplash/jdvsite.png";
import unreliableCalculator from "@/assets/img/gitsplash/UnreliableCalculator.png";
import webSlurm from "@/assets/img/gitsplash/WebSlurm.jpeg";
export default function Projects() {
  interface ProjectCardProps {
    img: StaticImageData;
    ghLink: string;
    link?: string;
  }
  const ProjectCard = ({
    img,
    ghLink,
    link,
  }: ProjectCardProps): JSX.Element => {
    return (
      <div className="flex w-full flex-row justify-center">
        <div className="flex flex-col items-center items-center justify-center rounded-md border-2 border-white">
          <div className="border-b">
            <Image
              src={img}
              width={500}
              height={500}
              alt="JDVivian Site"
              className="w-full"
            />
          </div>
          <div className="flex flex-row justify-center gap-8 p-2">
            <Link href={ghLink}>
              <div className="group flex w-full flex-col items-center justify-center text-white transition-all hover:scale-110">
                <BsGithub
                  size={35}
                  className="text-white group-hover:text-emerald-500 "
                />
                View on GitHub
              </div>
            </Link>

            {link && (
              <Link href={link}>
                <div className="group flex w-full flex-col items-center justify-center text-white transition-all hover:scale-110">
                  <BsGlobe
                    size={35}
                    className="text-white group-hover:text-emerald-500"
                  />
                  Visit the Site
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>JDVivian - My Projects</title>
        <meta name="description" content="JDVivian" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="font-Montserrat from-jdvred to-jdvredlight relative flex min-h-screen flex-col items-center gap-2 bg-gradient-to-b p-2">
        <Link href="/">
          <Image
            src={splashImage}
            width={100}
            height={100}
            alt="JDVLogo"
            className="transition-transform hover:scale-110"
          />
        </Link>
        <div className="text-4xl text-white">My Projects</div>
        <div className="text-xl text-white">
          This is a work in progress, and not all projects are listed here.
          Checkout my GitHub for a full list!
        </div>

        <div className="grid w-full gap-2 p-4 sm:grid-cols-1 md:grid-cols-3">
          <ProjectCard
            img={jdvsite}
            ghLink="https://github.com/literallyJoel/jdvsite"
            link="https://jdvivian.co.uk"
          />

          <ProjectCard
            img={unreliableCalculator}
            ghLink="https://github.com/literallyJoel/unreliableCalculator"
            link="https://unreliable.jdvivian.co.uk"
          />

          <ProjectCard
            img={webSlurm}
            ghLink="https://github.com/literallyJoel/webSlurm"
          />
        </div>
        <a
          href="https://github.com/literallyJoel/"
          target="_blank"
          className="absolute bottom-0 mb-2 w-1/2 rounded-lg bg-[#333] pb-2 pl-2 pr-2 pt-2 text-center text-white opacity-75 transition-all hover:scale-110 hover:bg-emerald-600 md:w-2/12"
        >
          <div className=" flex w-full flex-row items-center justify-center gap-4">
            <BsGithub size={30} />
            <span className="text-sm">literallyJoel</span>
          </div>
        </a>
      </main>
    </>
  );
}
