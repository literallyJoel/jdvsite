import { api } from "@src/utils/api";
import ExperienceModal from "./ExperienceModal";
import { useState } from "react";
import type { oCV_experience } from "@prisma/client";

const Experience = (): JSX.Element => {
  const { data: experience, isLoading } = api.ocv.getExperience.useQuery();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<oCV_experience>();
  //If the planetscale database is doing a coldstart it takes a second to start, so we show a loading spinner.

  if (isLoading) {
    return (
      <div className="flex w-full flex-row items-center justify-center gap-4">
        <div className="h-4 w-4 animate-bounce rounded-full bg-emerald-600 p-2" />
        <div
          className="h-5 w-5 animate-bounce rounded-full bg-emerald-600 p-2 "
          style={{ animationDelay: "0.15s" }}
        />
        <div
          className="h-6 w-6 animate-bounce rounded-full bg-emerald-600 p-2"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    );
  }


  return (
    <div className="relative h-full w-full grid-flow-col grid-rows-3 p-12 font-monsterrat md:grid md:h-screen">
      <ExperienceModal
        shouldShow={shouldShowModal}
        setShouldShow={setShouldShowModal}
        experience={selectedExperience}
      />
      {experience?.map((exp) => {
        const startMonth = exp.startDate.toLocaleString("default", {
          month: "long",
        });
        const endMonth = exp.endDate.toLocaleString(`default`, {
          month: "long",
        });
        const dateRange = `${startMonth} ${exp.startDate.getFullYear()} - ${
          exp.endDate.getFullYear() === 1970
            ? `Present`
            : `${endMonth} ${exp.endDate.getFullYear()}`
        }`;
        return (
          <button
            key={exp.id}
            className="group relative flex flex-col border-l-2 border-emerald-500  pl-2 pt-2 text-left text-white"
            onClick={() => {
              setShouldShowModal(true);
              setSelectedExperience(exp);
            }}
          >
            <div className="absolute left-0 top-2.5 h-5 w-5 -translate-x-1/2 rounded-full bg-emerald-500 transition-transform group-hover:scale-150 group-hover:animate-pulse" />
            <div className="pl-8 transition-transform group-hover:scale-110">
              <div className="italic text-slate-400">{dateRange}</div>
              <div className="text-lg font-bold">{exp.placeName}</div>
              <div>{exp.jobTitle}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Experience;
