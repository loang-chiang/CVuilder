import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from "./Input.jsx";

function PersonalInfo({ name, handleNameChange, email, handleEmailChange, phone, handlePhoneChange, extraInfo, setExtraInfo, handleExtraInfoChange }) {
    const addExtraInfo = () => {
        setExtraInfo([
            ...extraInfo,
            {
                id: uuidv4(),
                infoItem: ""
            }
        ])
    }

    const deleteExtraInfo = (id) => {
        setExtraInfo(extraInfo.filter(info => info.id !== id));
    }

    return (
        <div className="form-cont" id="personal-form-cont">
            <h3>Personal Information</h3>

            <div className="inputs-cont" id="personal-info-inputs">
                <Input
                    value={name}
                    handleChange={handleNameChange}
                    placeholder={"Name"}
                    nameClass={"personal-info-input"}
                />
                
                <Input
                    value={email}
                    handleChange={handleEmailChange}
                    placeholder={"Email"}
                    nameClass={"personal-info-input"}
                />

                <Input
                    value={phone}
                    handleChange={handlePhoneChange}
                    placeholder={"Phone"}
                    nameClass={"personal-info-input"}
                />
            </div>
            <button onClick={addExtraInfo} className="add-section-btn">Add Extra Info</button>

            <div>
                {extraInfo.map((info, idx) => (
                    <div className="extra-info-cont" key={info.id}>
                        <Input
                            value={info.infoItem}
                            handleChange={(e) => handleExtraInfoChange(info.id, e.target.value)}
                            placeholder={`Extra Personal Info ${idx + 1}`}
                            nameClass={"personal-info-input"}
                        />
                        <button onClick={() => deleteExtraInfo(info.id)} className="add-section-btn" id="delete-extra-info-btn">x</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

PersonalInfo.propTypes = {
    name: PropTypes.string.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handleEmailChange: PropTypes.func.isRequired,
    phone: PropTypes.string.isRequired,
    handlePhoneChange: PropTypes.func.isRequired,
    setExtraInfo: PropTypes.func.isRequired,
    extraInfo: PropTypes.array,
    handleExtraInfoChange:  PropTypes.func.isRequired,
};

export default PersonalInfo