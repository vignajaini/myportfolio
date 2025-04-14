import React from 'react';
import './skills.css';

const skills = {
  'Programming Languages': [
    { name: 'C', icon: '/icons/c.jpeg' },
    { name: 'Python', icon: '/icons/py.jpeg' },
    { name: 'JavaScript', icon: '/icons/js.jpeg' },
  ],
  'Web Technologies': [
    { name: 'HTML', icon: '/icons/html.png' },
    { name: 'CSS', icon: '/icons/css.jpeg' },
    { name: 'Vite', icon: '/icons/vite.jpeg' },
    { name: 'React', icon: '/icons/react.png' },
  ],
  'Databases': [
    { name: 'PostgreSQL', icon: '/icons/postgres.png' },
    { name: 'MySQL', icon: '/icons/mysql.png' },
    {name:'SQL',icon:'/icons/sql.png'},
  ],
  'Tools': [
    { name: 'Postman', icon: '/icons/postman.png' },
    { name: 'Git', icon: '/icons/Git.png' },
    { name: 'Github', icon: '/icons/Github.png' },
    { name: 'VS Code', icon: '/icons/vscode.jpeg' },
    { name: 'Tableau', icon: '/icons/Tableau.png' },
    {name:'Power BI',icon:'/icons/PowerBI.jpeg'}
  ],
};

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-header">My Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="skills-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillList.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
