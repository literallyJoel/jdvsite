import type { oCV_education } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "@src/utils/api";

interface props {
  education?: oCV_education;
  shouldShow: boolean;
  setShouldShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const EducationModal = ({
  education,
  shouldShow,
  setShouldShow,
}: props): JSX.Element => {
  const { data: qualifications, isLoading } =
    api.ocv.getQualifications.useQuery(
      { educationID: education?.id ?? "" },
      {
        enabled: !!education,
      },
    );

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

  if (isLoading) {
    return (
      <button
        className={clsx(
          "absolute left-0 top-0 z-20 h-screen w-full -translate-y-full flex-row items-center justify-center gap-2 bg-black bg-opacity-50 p-16 text-white backdrop-blur-md transition-transform duration-300 md:h-full",
          {
            "translate-y-0": !isInvisible,
            hidden: isHidden,
            flex: !isHidden,
          },
        )}
        onClick={() => setShouldShow(false)}
      >
        <div className="h-4 w-4 animate-bounce rounded-full bg-emerald-600 p-2" />
        <div
          className="h-5 w-5 animate-bounce rounded-full bg-emerald-600 p-2 "
          style={{ animationDelay: "0.15s" }}
        />
        <div
          className="h-6 w-6 animate-bounce rounded-full bg-emerald-600 p-2"
          style={{ animationDelay: "0.3s" }}
        />
      </button>
    );
  }

  return (
    <button
      className={clsx(
        "absolute left-0 top-0 z-20 h-screen w-full -translate-y-full flex-col items-center justify-center gap-2 bg-black bg-opacity-50 p-16 text-white backdrop-blur-md transition-transform duration-300 md:h-full",
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
        src={education?.image ?? ""}
        width={80}
        height={80}
        alt={`${education?.placeName} logo`}
      />
      <div className="text-center text-3xl">{education?.placeName}</div>
      <div className="pb-4 text-center text-xl">
        {education?.educationLevel}
      </div>
      {qualifications?.map((qualification) => (
        <div key={qualification.id} className="md:flex md:w-1/2 md:pl-28">
          <div className="md:w-1/2 md:text-left">{qualification.name}</div>
          <div className="md:w-1/2 ">{qualification.grade}</div>
        </div>
      ))}
    </button>
  );
};

//flex w-1/2 pl-28
//w-1/2 text-left self-start
//w-1/2 self-end
export default EducationModal;
