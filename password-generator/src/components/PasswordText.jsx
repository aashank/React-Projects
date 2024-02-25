import "../styling/PasswordText.css";
import PropTypes from "prop-types";
const PasswordText = ({ password }) => {
    return (
        <div className="passwordText" > {password}</div>
    )
}

PasswordText.propTypes = {
    password: PropTypes.string
}

export default PasswordText