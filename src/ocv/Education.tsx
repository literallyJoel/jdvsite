import { oCV_education } from "@prisma/client";
import { api } from "@src/utils/api";
import { useState } from "react";
import EducationModal from "./EducationModal";

const Education = (): JSX.Element => {
  const { data: education, isLoading } = api.ocv.getEducation.useQuery();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedEdu, setSelectedEdu] = useState<oCV_education>();

  return (
    <div className="relative flex h-full w-full flex-col md:flex-row items-center justify-center p-12 font-monsterrat md:h-screen">
      <EducationModal
        education={selectedEdu}
        shouldShow={shouldShowModal}
        setShouldShow={setShouldShowModal}
      />
      {education?.map((edu) => {
        const startMonth = edu.startDate.toLocaleString("default", {
          month: "long",
        });
        const endMonth = edu.endDate.toLocaleString(`default`, {
          month: "long",
        });
        const dateRange = `${startMonth} ${edu.startDate.getFullYear()} - ${
          edu.endDate.getFullYear() === 1970
            ? `Present`
            : `${endMonth} ${edu.endDate.getFullYear()}`
        }`;
        return (
          <button
            key={edu.id}
            className="md:border-l-0 group relative flex flex-col border-l-2 border-emerald-500 pl-2  pt-2 text-left text-white md:border-t-2"
            onClick={() => {
              setShouldShowModal(true);
              setSelectedEdu(edu);
            }}
          >
            <div className="absolute left-0 top-10 h-5 w-5 -translate-x-1/2 rounded-full bg-emerald-500 transition-transform group-hover:scale-150 group-hover:animate-pulse md:inset-x-1/2 md:top-0 md:-translate-y-1/2" />
            <div className="p-8 transition-transform group-hover:scale-110">
              <div className="text-center italic text-slate-400">
                {dateRange}
              </div>
              <div className="text-center text-lg font-bold">
                {edu.placeName}
              </div>
              <div className="text-center">{edu.educationLevel}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Education;