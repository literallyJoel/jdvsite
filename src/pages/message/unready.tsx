import splashImage from "@src/images/splashlogo.png";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
const Unready = (): JSX.Element => (
  <>
    <Head>
      <title>JDVivian</title>
      <meta name="description" content="JDVivian" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <main className="font-Montserrat flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-jdvred to-jdvredlight">
      <Link href="/">
        <Image
          src={splashImage}
          width={250}
          height={250}
          alt="JDVLogo"
          className="shadow-lg rounded-full hover:shadow-none"
        />
      </Link>
      <span className="pt-4 text-4xl text-white">
        {"This bit isn't quite ready for the prime time"}
      </span>
      <span className="pt-1 text-2xl text-white">
        {
          "This project is still private-access, but you can check out the code on GitHub!"
        }
      </span>

      <a
        href="https://github.com/literallyJoel/"
        target="_blank"
        className="absolute bottom-0 mb-2 w-2/12 rounded-lg bg-[#333] pb-2 pl-2 pr-2 pt-2 text-center text-white opacity-75 transition-all hover:scale-110 hover:bg-emerald-600"
      >
        <div className="flex flex-row items-center justify-center gap-4">
          <BsGithub />
          <span className="hidden lg:inline">Check out my Github</span>
        </div>
      </a>
    </main>
  </>
);

export default Unready;
