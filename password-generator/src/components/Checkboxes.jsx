import "../styling/Checkbox.css";
import PropTypes from "prop-types";

const Checkboxes = ({ checkboxData, setCheckboxData }) => {

    const handleCheckBoxValue = (index) => {
        const newCheckoxes = [...checkboxData];
        newCheckoxes[index].status = !newCheckoxes[index].status;
        setCheckboxData(newCheckoxes);
    }

    return (
        <div className="checkboxesContainer">
            {
                checkboxData.map((checkbox, index) => {
                    return <div key={index} className="checbox">
                        <input type="checkbox" checked={checkbox.status} onChange={() => handleCheckBoxValue(index)} />
                        <p>{checkbox.title}</p>
                    </div>
                })
            }
        </div>
    )
}

Checkboxes.propTypes = {
    checkboxData: PropTypes.array,
    setCheckboxData: PropTypes.func
}

export default Checkboxes;
