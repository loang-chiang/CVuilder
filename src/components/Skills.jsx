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
        <div className="form-cont">
            <div className="name-and-section">
                <h3>Skills</h3>
                <button className="add-section-btn" onClick={addSkill}>Add</button>
            </div>

            <div className="sections-cont">
                {skills.map((skill, index) => (
                    <div key={skill.id} className="section-cont skills-section-cont">
                        <div className="section-header">
                            <h4 className="skills-section-title">Section {index + 1}</h4>
                            <button className="delete-section-btn skill-delete-section-btn" onClick={() => deleteSkill(skill.id)}>Delete</button>
                        </div>

                        <div className="inputs-cont">
                            {Object.keys(skill.skillItem).map((field, idx) => (
                                idx === 0 ? (
                                    <div key={idx}>
                                        <Input
                                            value={skill.skillItem[field]}
                                            handleChange={(e) => handleSkillsChange(skill.id, field, e.target.value)}
                                            placeholder={skillFields[idx]}
                                            nameClass={"skills-input"}
                                        />
                                    </div>
                                ) : (
                                    <div key={idx}>
                                        <Input
                                            value={skill.skillItem[field]}
                                            handleChange={(e) => handleSkillsChange(skill.id, field, e.target.value)}
                                            placeholder={skillFields[idx]}
                                            textarea={true}
                                            nameClass={"skills-input"}
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