import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from "./Input.jsx";

function Skills({ skills, setSkills, handleSkillsChange }) {
    const addSkill = () => {
        setSkills([
            ...skills,
            {
                id: uuidv4(),
                skill: ''
            }
        ])
    }
    const deleteSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id))
    }

    return(
        <div className="skills-container">
            <h3>Skills</h3>
            <button className="add-section-btn" onClick={addSkill}>Add</button>

            <div className="inputs-container">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                        <Input
                            value={skill.skill}
                            handleChange={(e) => {handleSkillsChange(skill.id, e.target.value)}}
                        />
                        <button className="delete-section-btn" onClick={() => deleteSkill(skill.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>        
    )
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired,
    setSkills: PropTypes.func.isRequired,
    handleSkillsChange: PropTypes.func.isRequired,
};

export default Skills