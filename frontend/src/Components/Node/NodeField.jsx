const NodeField = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
      return (
        <div>
          <label>
            {field.label}:
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(field.id, e.target.value)}
            />
          </label>
        </div>
      );

    case "select":
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

    case "textarea":
      return (
        <div>
          <label>
            {field.label}:
            <textarea
              value={value}
              onChange={(e) => onChange(field.id, e.target.value)}
            />
          </label>
        </div>
      );

    default:
      return null;
  }
};

export default NodeField;