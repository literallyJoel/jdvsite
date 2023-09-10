import profile from "@src/images/profile.jpg";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const AboutMe = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full flex-col items-center p-8">
      <Image
        src={profile}
        width={200}
        height={200}
        className="rounded-full border-2 border-white"
        alt="profile image"
      />

      <p className="p-2 text-3xl font-bold text-white">Joel Vivian</p>
      <p className="text-center text-xl text-white">
        3rd Year Computer Science Student
      </p>
      <p className="text-center text-white">University of Liverpool</p>
      <p className="p-2 text-center text-sm text-white md:w-1/2">
        I am a computer Science student & former IT Support Technician with
        skills in React, NodeJS, Java, Python, Powershell, Azure, DevOps,
        Computer Hardware, and Customer Support.
      </p>

      <div className="flex flex-row gap-4 pt-4 text-3xl  text-white">
        <a
          href="https://github.com/literallyJoel"
          target="_blank"
          className="transition-transform hover:scale-125 hover:text-[#333]"
        >
          <BsGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jdvivian/"
          target="_blank"
          className="transition-transform hover:scale-125 hover:text-[#0077b5]"
        >
          <BsLinkedin />
        </a>

        <a
          href="mailto:joel@jdvivian.co.uk"
          target="_blank"
          className="transition-transform hover:scale-125 hover:text-emerald-500"
        >
          <HiOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
