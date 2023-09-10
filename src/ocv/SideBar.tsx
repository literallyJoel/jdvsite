import Image from "next/image";
import Link from "next/link";
import splashLogo from "@src/images/splashlogo.png";
import type { ViewMode } from "@src/pages/ocv";
import clsx from "clsx";
import { CgProfile } from "react-icons/cg";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SidebarButton } from "./SidebarButton";

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

      <SidebarButton
        buttonViewMode="about"
        currentViewMode={viewMode}
        setViewMode={setViewMode}
        Icon={CgProfile}
        text="About"
      />

      <SidebarButton
        buttonViewMode="skills"
        currentViewMode={viewMode}
        setViewMode={setViewMode}
        Icon={BsCardChecklist}
        text="My Skills"
      />
      <SidebarButton
        buttonViewMode="education"
        currentViewMode={viewMode}
        setViewMode={setViewMode}
        Icon={MdOutlineClass}
        text="My Education"
      />
      <SidebarButton
        buttonViewMode="experience"
        currentViewMode={viewMode}
        setViewMode={setViewMode}
        Icon={HiOutlineDocumentText}
        text="My Experience"
      />
    </div>
  );
};

export default SideBar;
