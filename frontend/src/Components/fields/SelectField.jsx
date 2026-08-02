import "./SelectField.css";

const SelectField = ({ field, value, onChange }) => (
    <div className="node-field">

        <label>{field.label}</label>

        <select
            value={value}
            onChange={(e)=>onChange(field.id,e.target.value)}
        >
            {field.options.map(option=>(
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>

    </div>
);

export default SelectField;