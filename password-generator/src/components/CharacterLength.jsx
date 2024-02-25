import "../styling/CharacterLength.css";
import PropTypes from "prop-types";

const CharacterLength = ({ length, setLength }) => {

    const handleRangeValue = (e) => {
        setLength(e.target.value)
    }

    return (
        <>
            <div className="characterLengthContainer">
                <div className="characterLength">Character Length</div>
                <div className="lengthStyling">{length}</div>
            </div>
            <div className="rangeContainer">
                <input className="rangeInput" type="range" min="0" max="16" value={length} onChange={handleRangeValue} />
            </div>
        </>
    )
}

CharacterLength.propTypes = {
    length: PropTypes.number,
    setLength: PropTypes.func
}

export default CharacterLength