import SkillCard from "./SkillsCard";
import { skills } from "../../../data/skills";

const SkillsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {skills.map((group, index) => (
        <SkillCard key={index} group={group} index={index} />
      ))}
    </div>
  );
};

export default SkillsGrid;
