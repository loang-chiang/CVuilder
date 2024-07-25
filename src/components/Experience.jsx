import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from "./Input.jsx";

const experienceFields = ["Company", "Role", "Location", "Start date", "End date", "Duties (separated by newlines)"]

function Experience({ expSections, setExpSections, handleExperienceChange }) {
    const addSection = () => {
        setExpSections([
            ...expSections, // includes all the previous section plus the following
            {
                id: uuidv4(),
                experienceItem: {
                    company: "",
                    role: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    duties: ""
                }
            }
        ])
    }

    const deleteSection = (id) => {
        // set sections excluding the chosen section
        setExpSections(expSections.filter(section => section.id !== id));
    }

    return (
        <div className="form-cont">
            <div className="name-and-section">
                <h3>Experience</h3>
                <button className="add-section-btn" onClick={addSection}>Add</button>
            </div>

            <div className="sections-cont">
                {expSections.map((section, index) => (
                    <div key={section.id} className="section-cont exp-section-cont">
                        <div className="section-header">
                            <h4 className="exp-section-title">Section {index + 1}</h4>
                            <button className="delete-section-btn exp-delete-section-btn" onClick={() => deleteSection(section.id)}>Delete</button>
                        </div>

                        <div className="inputs-cont">
                            {Object.keys(section.experienceItem).map((field, idx) => (
                                idx === 5 ? (
                                    <div key={idx}>
                                        <Input
                                            value={section.experienceItem[field]}
                                            handleChange={(e) => handleExperienceChange(section.id, field, e.target.value)}
                                            placeholder={experienceFields[idx]}
                                            textarea={true}
                                            nameClass={"experience-input"}
                                        />
                                    </div>
                                ) : (
                                    <div key={idx}>
                                        <Input
                                            value={section.experienceItem[field]}
                                            handleChange={(e) => handleExperienceChange(section.id, field, e.target.value)}
                                            placeholder={experienceFields[idx]}
                                            nameClass={"experience-input"}
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

Experience.propTypes = {
    expSections: PropTypes.array.isRequired,
    setExpSections: PropTypes.func.isRequired,
    handleExperienceChange: PropTypes.func.isRequired,
};

export default Experience 