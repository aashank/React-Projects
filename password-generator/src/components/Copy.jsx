import PropTypes from "prop-types";
const Copy = ({ password }) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
    }

    return (
        <button className="btnDesign" onClick={handleCopy}>Copy</button>
    )
}

Copy.propTypes = {
    password: PropTypes.string
}

export default Copy