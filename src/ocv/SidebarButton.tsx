import type { ViewMode } from "@src/pages/ocv";
import clsx from "clsx";
import type { IconType } from "react-icons";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface props {
  buttonViewMode: ViewMode;
  Icon: IconType;
  text: string;
}

export const SidebarButton = ({
  buttonViewMode,
  Icon,
  text,
}: props): JSX.Element => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "";
  return (
    <Link
      className={clsx(
        "group flex w-full justify-center border-emerald-500 p-2 font-monsterrat text-white hover:border-l-4",
        { "border-l-4": buttonViewMode === page },
      )}
      href={`?page=${buttonViewMode}`}
    >
      <div
        className={clsx(
          "flex flex-row justify-center gap-4 transition-transform group-hover:scale-125",
          {
            "scale-125": buttonViewMode === page,
          },
        )}
      >
        <Icon size={25} />
        <p className="hidden   md:inline">{text}</p>
      </div>
    </Link>
  );
};
