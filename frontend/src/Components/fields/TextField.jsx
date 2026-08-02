import "./Field.css";

const TextField = ({ field, value, onChange }) => {
  return (
    <div className="node-field">
      <label>{field.label}</label>

      <input
        type="text"
        value={value}
        placeholder={field.placeholder || ""}
        onChange={(e) => onChange(field.id, e.target.value)}
      />
    </div>
  );
};

export default TextField;