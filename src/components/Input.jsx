import PropTypes from 'prop-types';

function Input({ value, handleChange, placeholder }) {
    return (
        <div className="input">
            <input placeholder={placeholder} value={value} onChange={handleChange}/>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default Input;