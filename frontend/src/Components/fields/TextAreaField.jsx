import "./TextAreaField.css";

const TextAreaField = ({ field, value, onChange }) => {
  return (
    <div className="node-field">
      <label>{field.label}</label>

      <textarea
        value={value}
        placeholder={field.placeholder}
        onChange={(e) => onChange(field.id, e.target.value)}
      />
    </div>
  );
};

export default TextAreaField;