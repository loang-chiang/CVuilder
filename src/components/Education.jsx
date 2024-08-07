import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from "./Input.jsx";

const educationFields = ["Institution", "Degree", "Location", "Start date", "End date", "GPA", "Relevant Coursework", "Awards/Honors"]

function Education({ edSections, setEdSections, handleEducationChange }) {
    const addSection = () => {
        setEdSections([
            ...edSections,  // includes all the previous section plus the following
            {
                id: uuidv4(),
                educationItem: {
                    institution: "",
                    degree: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    gpa: "",
                    coursework: "",
                    awards: ""
                }
            }
        ])
    }

    const deleteSection = (id) => {
        // set sections excluding the chosen section
        setEdSections(edSections.filter(section => section.id !== id));
    }

    return (
        <div className="form-cont">
            <div className="name-and-section">
                <h3>Education</h3>
                <button className="add-section-btn" onClick={addSection}>Add</button>
            </div>

            <div className="sections-cont">
                {edSections.map((section, index) => (
                    <div key={section.id} className="section-cont ed-section-cont">
                        <div className="section-header">
                            <h4 className="ed-section-title">Section {index + 1}</h4>
                            <button className="delete-section-btn ed-delete-section-btn" onClick={() => deleteSection(section.id)}>Delete</button>
                        </div>

                        <div className="inputs-cont">
                            {Object.keys(section.educationItem).map((field, idx) => (
                                <div key={idx}>
                                    <Input
                                        value={section.educationItem[field]}
                                        handleChange={(e) => handleEducationChange(section.id, field, e.target.value)}
                                        placeholder={educationFields[idx]}
                                        nameClass={"education-input"}
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

Education.propTypes = {
    edSections: PropTypes.array.isRequired,
    setEdSections: PropTypes.func.isRequired,
    handleEducationChange: PropTypes.func.isRequired,
};

export default Education