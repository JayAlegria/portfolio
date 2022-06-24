import React from 'react';
import { Skills } from './AboutConfig';
import './AboutSkills.scss';

export const AboutSkills = () => {
  return (
    <div className="about__skills pt-5">
      <p className="vertical-line">Skills</p>
      <div className="row mt-3">
        {Skills.map((skill) => (
          <div key={skill.name} className="col-3 mb-5">
            <div className="p-3 bg-semi-transparent skill-card">
              <i className={`bi mb-0 ${skill.icon} ${skill.iconColor}`}></i>
              <p className="text-muted">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
