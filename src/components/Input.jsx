import PropTypes from 'prop-types';

function Input({ value, handleChange, placeholder, textarea = false, nameClass }) {
    return (
        <div>
            {textarea === false ? (
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={nameClass}
                />
            ) : (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={nameClass}
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
    textarea: PropTypes.bool,
    nameClass: PropTypes.string,
};

export default Input;