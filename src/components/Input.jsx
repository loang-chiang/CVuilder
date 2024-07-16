import PropTypes from 'prop-types';

function Input({ value, handleChange, placeholder, textarea = false }) {
    return (
        <div className="input">
            {textarea === false ? (
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            ) : (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            )}
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    textarea: PropTypes.bool
};

export default Input;