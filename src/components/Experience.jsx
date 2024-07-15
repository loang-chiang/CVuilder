import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from "./Input.jsx";

const experienceFields = ["Company", "Start date", "End date", "Location", "Role", "Duties (separated by commas)"]

function Experience({ sections, setExpSections, handleExperienceChange }) {
    const addSection = () => {
        setExpSections([
            ...sections, // includes all the previous section plus the following
            {
                id: uuidv4(),
                experienceItem: {
                    company: "",
                    startDate: "",
                    endDate: "",
                    location: "",
                    role: "",
                    duties: ""
                }
            }
        ])
    }

    const deleteSection = (id) => {
        // set sections excluding the chosen section
        setExpSections(sections.filter(section => section.id !== id));
    }

    return (
        <div>
            <h3>Experience</h3>
            <button className="add-section-btn" onClick={addSection}>Add</button>

            <div className="section-cont">
                {sections.map((section, index) => (
                    <div key={section.id}>
                        <div className="section-header">
                            <h5>Section {index + 1}</h5>
                            <button className="delete-section-btn" onClick={() => deleteSection(section.id)}>Delete</button>
                        </div>

                        <div className="inputs-cont">
                            {Object.keys(section.experienceItem).map((field, idx) => (
                                <div key={idx}>
                                    <Input
                                        value={section.experienceItem[field]}
                                        handleChange={(e) => handleExperienceChange(section.id, field, e.target.value)}
                                        placeholder={experienceFields[idx]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

Experience.propTypes = {
    sections: PropTypes.array.isRequired,
    setExpSections: PropTypes.func.isRequired,
    handleExperienceChange: PropTypes.func.isRequired,
};

export default Experience 