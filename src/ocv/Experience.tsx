import { api } from "@src/utils/api";
import clsx from "clsx";
import ExperienceModal from "./ExperienceModal";
import { useState } from "react";
import { oCV_experience } from "@prisma/client";

const Experience = (): JSX.Element => {
  const { data: experience, isLoading } = api.ocv.getExperience.useQuery();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<oCV_experience>();
  //If the planetscale database is doing a coldstart it takes a second to start, so we show a loading spinner.
  if (isLoading) {
    return (
      <div role="status" className="flex flex-col items-center content-center">
        <svg
          aria-hidden="true"
          className="mr-2 h-8 w-8 animate-spin fill-emerald-500 text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const _exp = experience![0];
  return (
    <div className="relative h-full w-full grid-flow-col grid-rows-3 p-12 font-monsterrat md:grid md:h-screen">
      <ExperienceModal
        shouldShow={shouldShowModal}
        setShouldShow={setShouldShowModal}
        experience={selectedExperience}
      />
      {experience?.map((exp, index) => {
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
            key={index}
            className="group relative flex flex-col border-l-2 border-emerald-500  pl-2 pt-2 text-left text-white"
            onClick={() => {
              setShouldShowModal(true);
              setSelectedExperience(exp);
            }}
          >
            <div className="absolute left-0 top-2.5 h-5 w-5 -translate-x-1/2 rounded-full bg-emerald-500 transition-transform group-hover:scale-150" />
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
