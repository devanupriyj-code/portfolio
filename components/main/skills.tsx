import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
} from "@/constants";

export const Skills = () => {

  // 🔥 Merge all skills
  const allSkills = [
    ...FRONTEND_SKILL,
    ...BACKEND_SKILL,
    ...FULLSTACK_SKILL,
    ...OTHER_SKILL,
  ];

  // ✅ Remove duplicates
  const uniqueSkills = Array.from(
    new Map(allSkills.map((item) => [item.skill_name, item])).values()
  );

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-24 gap-10 overflow-hidden"
    >

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-30"
      >
        <source src="/videos/skills-bg.webm" type="video/webm" />
      </video>

      {/* 🌌 Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* ✨ Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />

      {/* 🔤 Title */}
      <SkillText />

      {/* 🧠 Skills Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl px-4">

        {uniqueSkills.map((skill, i) => (
          <div
            key={skill.skill_name}
            className="transition duration-300 hover:scale-110 hover:-translate-y-2"
          >
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          </div>
        ))}

      </div>
    </section>
  );
};