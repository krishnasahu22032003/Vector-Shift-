const SelectField = ({ field, value, onChange }) => {
  return (
    <div>
      <label>
        {field.label}:
        <select
          value={value}
          onChange={(e) => onChange(field.id, e.target.value)}
        >
          {field.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectField;