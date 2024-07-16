import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from "./Input.jsx";

const skillFields = ["Label (ex. Hobbies, Languages", "Skills"]

function Skills({ skills, setSkills, handleSkillsChange }) {
    const addSkill = () => {
        setSkills([
            ...skills,
            {
                id: uuidv4(),
                skillItem: {
                    label: '',
                    skill: ''
                }
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

            <div className="section-cont">
                {skills.map((skill, index) => (
                    <div key={skill.id}>
                        <div className="section-header">
                            <h5>Section {index + 1}</h5>
                            <button className="delete-section-btn" onClick={() => deleteSkill(skill.id)}>Delete</button>
                        </div>

                        <div className="inputs-cont">
                            {Object.keys(skill.skillItem).map((field, idx) => (
                                idx === 0 ? (
                                    <div key={idx}>
                                        <Input
                                            value={skill.skillItem[field]}
                                            handleChange={(e) => handleSkillsChange(skill.id, field, e.target.value)}
                                            placeholder={skillFields[idx]}
                                        />
                                    </div>
                                ) : (
                                    <div key={idx}>
                                        <Input
                                            value={skill.skillItem[field]}
                                            handleChange={(e) => handleSkillsChange(skill.id, field, e.target.value)}
                                            placeholder={skillFields[idx]}
                                            textarea={true}
                                        />
                                    </div>
                                )
                            ))}
                        </div>
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