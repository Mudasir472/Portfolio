import AllSkills from "./AllSkills";
import java from "../assets/Images/java.svg"
import js from '../assets/Images/js.svg'
function Skills() {
    const skillsData = [
        {
            img: [js,java],
            heading: "Programming Languages",
            content: ["Java", "JavaScript", "HTML"]
        },
        {
            img: [js,java],
            heading: "Libraries & Frameworks",
            content: ["React", "Redux", "Bootstrap", "Tailwind CSS"]
        },
        {
            img: [js, java],
            heading: "Backend & Database",
            content: ["Node.js", "Express.js", "MongoDB"]
        },
        {
            img: [js,java],
            heading: "Dev Tools",
            content: ["Git", "GitHub", "VSCode"]
        },
        
        
        {
            img: [js,java],
            heading: "Other Skills",
            content: ["Problem Solving", "Data Structures", "Algorithms"]
        }
    ];

    return (
        <div className="skills">
            <div className="skillsMain container">
                <h1>My Skills</h1>
                <div className="allSkills flex flex-wrap">
                    {skillsData.map((skill, index) => (
                        <AllSkills
                            key={index}
                            img={skill.img}
                            heading={skill.heading}
                            content={skill.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
