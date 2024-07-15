import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from "./Input.jsx";

const educationFields = ["Institution", "Start date", "End date", "Location", "Degree", "GPA", "Relevant Coursework", "Awards/Honors"]

function Education({ sections, setEdSections, handleEducationChange }) {
    const addSection = () => {
        setEdSections([
            ...sections,  // includes all the previous section plus the following
            {
                id: uuidv4(),
                educationItem: {
                    institution: "",
                    startDate: "",
                    endDate: "",
                    degree: "",
                    gpa: "",
                    relevantCoursework: "",
                    awards: ""
                }
            }
        ])
    }

    const deleteSection = (id) => {
        // set sections excluding the chosen section
        setEdSections(sections.filter(section => section.id !== id));
    }

    return (
        <div>
            <h3>Education</h3>
            <button className="add-section-btn" onClick={addSection}>Add</button>

            <div className="section-cont">
                {sections.map((section, index) => (
                    <div key={section.id}>
                        <div className="section-header">
                            <h5>Section {index + 1}</h5>
                            <button className="delete-section-btn" onClick={() => deleteSection(section.id)}>Delete</button>
                        </div>

                        <div className="inputs-cont">
                            {Object.keys(section.educationItem).map((field, idx) => (
                                <div key={idx}>
                                    <Input
                                        value={section.educationItem[field]}
                                        handleChange={(e) => handleEducationChange(section.id, field, e.target.value)}
                                        placeholder={educationFields[idx]}
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
    sections: PropTypes.array.isRequired,
    setEdSections: PropTypes.func.isRequired,
    handleEducationChange: PropTypes.func.isRequired,
};

export default Education