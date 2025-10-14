"use client";

import { useState } from "react";

import { experiences, Experience } from "../data/experiences";

interface ExperienceCardProps {
  exp: Experience;
  isActive: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, isActive }) => {
  return (
    <div className="max-w-6xl py-2 rounded-2xl transition-all duration-30">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="text-left">
          <p className="text-sm">{exp.date}</p>
        </div>
        <div>
          <h2
            className={`text-lg font-bold mb-2 transition-colors duration-300 ${
              isActive ? "text-link-hover" : "text-title"
            }`}
          >
            {exp.title}
          </h2>
          <p className="my-2 text-text">{exp.description}</p>
          <ul>
            {exp.skills.map((skill, i) => (
              <li
                key={i}
                className="inline-block bg-card-background/60 text-link-hover text-xs font-medium px-3 py-1 mr-2 mb-2 rounded-full border border-link-hover/20"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-col gap-6" id="experience">
      <h2 className="text-1xl font-bold text-link-hover uppercase pt-6">Experience</h2>

      {experiences.map((exp, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className={`flex-1 transition-opacity duration-300 cursor-pointer ${
              activeIndex !== null && !isActive ? "opacity-60" : "opacity-100"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <ExperienceCard exp={exp} isActive={isActive} />
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceSection;
