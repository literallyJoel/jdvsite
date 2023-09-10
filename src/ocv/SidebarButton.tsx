import type { ViewMode } from "@src/pages/ocv";
import clsx from "clsx";
import type { IconType } from "react-icons";

interface props {
  buttonViewMode: ViewMode;
  currentViewMode: ViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  Icon: IconType;
  text: string;
}

export const SidebarButton = ({
  buttonViewMode,
  currentViewMode,
  setViewMode,
  Icon,
  text,
}: props): JSX.Element => {
  return (
    <button
      className={clsx(
        "group flex w-full justify-center border-emerald-500 p-2 text-white hover:border-l-4",
        { "border-l-4": buttonViewMode === currentViewMode },
      )}
      onClick={() => setViewMode(buttonViewMode)}
    >
      <div
        className={clsx(
          "flex flex-row justify-center gap-4 transition-transform group-hover:scale-125",
          {
            "scale-125": buttonViewMode === currentViewMode,
          },
        )}
      >
        <Icon className="text-2xl" />
        <p className="hidden md:inline">{text}</p>
      </div>
    </button>
  );
};
