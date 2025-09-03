const skills = [
    { name: "HTML", icon: "fa-brands fa-html5", colorClass: "html" },
    { name: "CSS", icon: "fa-brands fa-css3-alt", colorClass: "css" },
    { name: "JavaScript", icon: "fa-brands fa-js-square", colorClass: "js" },
    { name: "React", icon: "fa-brands fa-react", colorClass: "react" },
    { name: "Node", icon: "fa-brands fa-node-js", colorClass: "node" },
    { name: "Vue", icon: "fa-brands fa-vuejs", colorClass: "vue" },
    { name: "TypeScript", icon: "fa-brands fa-typescript", colorClass: "typescript" },
    { name: "Content Writing", icon: "fa-solid fa-pen", color: "bg-purple-500" },
    { name: "Technical Writing", icon: "fa-solid fa-pen-fancy", color: "bg-purple-600" },
    { name: "AI Training", icon: "fa-solid fa-robot", colorClass: "other" },
    { name: "Data Annotation", icon: "fa-solid fa-database", colorClass: "other" },
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                {skills.map((skill, idx) => (
                    <div key={idx} className={`skill-card ${skill.colorClass}`}>
                        <i className={skill.icon}></i>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
