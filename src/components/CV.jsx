import PropTypes from 'prop-types';
import '../styles/cv.css'

function CV({ name, email, phone, edSections, expSections, skills }) {
    return (
        <div className="cv-cont">
            <div className="personal-info-cont">
                <h2 className="name">{name}</h2>
                <p className="email-and-phone">
                    {email} · {phone}
                </p>
            </div>

            <div className="part-cont">
                <h4>EDUCATION</h4>
                <hr/>

                {edSections.map((edObject) => {
                    const edItem = edObject.educationItem;

                    return (
                        <div className="section-cont" key={edObject.id}>
                            <div className="section-main-info">
                                <div className="institution-and-degree">
                                    <b>{edItem.institution}</b>, <i>{edItem.degree}</i>
                                </div>
                                <div className="location-and-dates">
                                    <b>{edItem.location} | {edItem.startDate} - {edItem.endDate}</b>
                                </div>
                            </div>
                            <ul> {/* the gpa, coursework, and awards are all optional! */}
                                {edItem.gpa !== "" ? <li>GPA: {edItem.gpa} out of 4.0</li> : null}
                                {edItem.coursework !== "" ? <li>Relevant Coursework: {edItem.coursework}</li> : null}
                                {edItem.awards !== "" ? <li>Awards/Honors: {edItem.awards}</li> : null}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="part-cont">
                <h4>EXPERIENCE</h4>
                <hr/>

                {expSections.map((expObject) => {
                    const expItem = expObject.experienceItem;
                    const duties = expItem.duties.split(",");
                    
                    return (
                        <div className="section-cont" key={expObject.id}>
                            <div className="section-main-info">
                                <div className="company-and-role">
                                    <b>{expItem.company}</b>, <i>{expItem.role}</i>
                                </div>
                                <div className="location-and-dates">
                                    <b>{expItem.location} | {expItem.startDate} - {expItem.endDate}</b>
                                </div>
                            </div>

                            <ul>
                                {duties.map((duty, dutyID) => {
                                    return (
                                        <li key={dutyID}>{duty}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="part-cont">
                <h4>SKILLS</h4>
                <hr/>

                {skills.map((skillObject) => {
                    const skillItem = skillObject.skillItem;

                    return (
                        <div className="skill-cont" key={skillObject.id}>
                            <b>{skillItem.label}</b>: {skillItem.skill}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

CV.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edSections: PropTypes.array.isRequired,
    expSections: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired
};

export default CV