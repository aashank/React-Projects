import "../styling/GenerateButton.css";
import PropTypes from "prop-types";

const GenerateButton = ({ length, checkboxData, getPasswordGenerator }) => {
    return (
        <div className="generateButtonContainer">
            <button className="btnDesign generateButton" onClick={() => getPasswordGenerator(checkboxData, length)}>GENERATE PASSWORD</button>
        </div>
    )
}

GenerateButton.propTypes = {
    length: PropTypes.number,
    checkboxData: PropTypes.array,
    getPasswordGenerator: PropTypes.func
}
export default GenerateButton