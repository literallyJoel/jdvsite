import type { oCV_skills } from "@prisma/client";
import { api } from "@src/utils/api";
import { useState } from "react";
import SkillsModal from "./SkillsModal";
const Skills = (): JSX.Element => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<oCV_skills>();

  const { data: skills, isLoading } = api.ocv.getSkills.useQuery();

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
    <div className="relative h-full w-full grid-flow-col grid-rows-5 gap-2 p-12 font-monsterrat md:grid md:h-screen">
      <SkillsModal
        shouldShow={shouldShowModal}
        setShouldShow={setShouldShowModal}
        skill={selectedSkill}
      />
      {skills?.map((skill) => (
        <button
          key={skill.id}
          className="group relative flex flex-col justify-center border-l-2  border-emerald-500 pl-2 pt-2 text-left text-white"
          onClick={() => {
            setSelectedSkill(skill);
            setShouldShowModal(true);
          }}
        >
          <div className="absolute left-0 h-5 w-5 -translate-x-1/2 rounded-full bg-emerald-500 transition-transform group-hover:scale-150 group-hover:animate-pulse" />
          <div className="pl-8 transition-transform group-hover:scale-110">
            <div>{skill.skillName}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Skills;
