import Image from "next/image";
import Link from "next/link";
import splashLogo from "@/assets/img/splashlogo.png";
import { CgProfile } from "react-icons/cg";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SidebarButton } from "./SidebarButton";

const SideBar = (): JSX.Element => {
  return (
    <div className="flex h-screen w-2/12 flex-col items-center gap-8 border-r-2 border-white pr-2 pt-4">
      <div className="flex flex-row items-center justify-center pb-8 transition-transform hover:scale-125">
        <Link href="/">
          <Image
            src={splashLogo}
            className="h-10 w-10 md:h-20 md:w-20"
            alt="JDVLogo"
          />
        </Link>
      </div>

      <SidebarButton buttonViewMode="about" Icon={CgProfile} text="About" />

      <SidebarButton
        buttonViewMode="skills"
        Icon={BsCardChecklist}
        text="My Skills"
      />
      <SidebarButton
        buttonViewMode="education"
        Icon={MdOutlineClass}
        text="My Education"
      />
      <SidebarButton
        buttonViewMode="experience"
        Icon={HiOutlineDocumentText}
        text="My Experience"
      />
    </div>
  );
};

export default SideBar;
