import Image from "next/image";
import Link from "next/link";
import splashLogo from "@src/images/splashlogo.png";
import type { ViewMode } from "@src/pages/ocv";
import clsx from "clsx";

interface props {
  viewMode: ViewMode;
  /*This could just be a void function that takes a ViewMode
  In general I prefer to use this because it gives me access to the previous state,
  though I have no use for it here I keep it for consistency*/
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
}

const SideBar = ({ viewMode, setViewMode }: props): JSX.Element => {
  return (
    <div className="flex h-screen w-2/12 flex-col items-center gap-8 border-r-2 border-white pt-4">
      <div className="flex flex-row items-center justify-center pb-8 transition-transform hover:scale-125">
        <Link href="/">
          <Image src={splashLogo} height={50} width={50} alt="JDVLogo" />
        </Link>
      </div>
      <button
        className={clsx(
          "group w-full border-emerald-500 p-2 text-white hover:border-l-4",
          { "border-l-4": viewMode === "about" },
        )}
        onClick={() => setViewMode("about")}
      >
        <p
          className={clsx("transition-transform group-hover:scale-125", {
            "scale-125": viewMode === "about",
          })}
        >
          About me
        </p>
      </button>
      <button
        className={clsx(
          "group w-full border-emerald-500 p-2 text-white hover:border-l-4",
          { "border-l-4": viewMode === "skills" },
        )}
        onClick={() => setViewMode("skills")}
      >
        <p
          className={clsx("transition-transform group-hover:scale-125", {
            "scale-125": viewMode === "skills",
          })}
        >
          My Skills
        </p>
      </button>
      <button
        className={clsx(
          "group w-full border-emerald-500 p-2 text-white hover:border-l-4",
          { "border-l-4": viewMode === "education" },
        )}
        onClick={() => setViewMode("education")}
      >
        <p
          className={clsx("transition-transform group-hover:scale-125", {
            "scale-125": viewMode === "education",
          })}
        >
          My Education
        </p>
      </button>
      <button
        className={clsx(
          "group w-full border-emerald-500 p-2 text-white hover:border-l-4",
          { "border-l-4": viewMode === "experience" },
        )}
        onClick={() => setViewMode("experience")}
      >
        <p
          className={clsx("transition-transform group-hover:scale-125", {
            "scale-125": viewMode === "experience",
          })}
        >
          My Experience
        </p>
      </button>
    </div>
  );
};

export default SideBar;
