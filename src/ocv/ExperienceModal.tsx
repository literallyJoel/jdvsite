import type { experience } from "@/server/db/schema";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
interface props {
  experience?: experience;
  shouldShow: boolean;
  setShouldShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceModal = ({
  experience,
  shouldShow,
  setShouldShow,
}: props): JSX.Element => {
  useEffect(() => {
    const handleEscapePress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShouldShow(false);
      }
    };

    if (shouldShow) {
      window.addEventListener("keydown", handleEscapePress);
    } else {
      window.removeEventListener("keydown", handleEscapePress);
    }
  }, [shouldShow, setShouldShow]);

  const [isHidden, setIsHidden] = useState(true);
  const [isInvisible, setIsInvisible] = useState(true);
  /*This controls hiding the modal in such a way I can use transitions but not break accessibility
    You can't use transitions if changing from hidden but if you just use invisible it'll break screen readers.
    I could do this in the same useEffect as above but I prefer to separate them for readibility*/

  useEffect(() => {
    if (shouldShow) {
      //We remove the hidden class first
      setIsHidden(false);

      //Wait for it to enter the DOM and then set as visible so the transition plays.
      setTimeout(() => {
        setIsInvisible(false);
      }, 300);
    } else {
      //We set invisible first so the transition plays
      setIsInvisible(true);
      //The transition takes 300ms so we wait 400 so it finished playing then add the hidden property.
      setTimeout(() => {
        setIsHidden(true);
      }, 400);
    }
  }, [shouldShow]);

  return (
    <button
      className={clsx(
        "absolute left-0 top-0 z-20 h-full w-full -translate-y-full flex-col items-center justify-center gap-2 bg-black bg-opacity-50 p-16 text-white backdrop-blur-md transition-transform duration-300",
        {
          "translate-y-0": !isInvisible,
          hidden: isHidden,
          flex: !isHidden,
        },
      )}
      onClick={() => setShouldShow(false)}
    >
      <Image
        className="rounded-full"
        src={experience?.image ?? ""}
        width={80}
        height={80}
        alt={`${experience?.placeName} logo`}
      />
      <div className="text-center text-3xl">{experience?.placeName}</div>
      <div className="text-center text-xl">{experience?.jobTitle}</div>
      <div className="text-center">{experience?.description}</div>
    </button>
  );
};

export default ExperienceModal;
