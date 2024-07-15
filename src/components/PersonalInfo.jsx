import PropTypes from 'prop-types';
import Input from "./Input.jsx";

function PersonalInfo({ name, handleNameChange, email, handleEmailChange, phone, handlePhoneChange }) {
    return (
        <div className="form-cont">
            <h3>Personal Information</h3>

            <div className="inputs-cont">
                <Input
                    value={name}
                    handleChange={handleNameChange}
                    placeholder={"Name"}
                />
                
                <Input
                    value={email}
                    handleChange={handleEmailChange}
                    placeholder={"Email"}
                />

                <Input
                    value={phone}
                    handleChange={handlePhoneChange}
                    placeholder={"Phone"}
                />
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
};

export default PersonalInfo