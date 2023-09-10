import { api } from "@src/utils/api";
import clsx from "clsx";

const Experience = (): JSX.Element => {
  const { data: experience } = api.ocv.getExperience.useQuery();

  return (
    <div className="font-monsterrat relative h-full w-full grid-flow-col grid-rows-3 p-12 md:grid md:h-screen">
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
            className="group relative flex flex-col border-l-2 border-emerald-500 pl-2 pt-2 text-left text-white"
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
