const TextAreaField = ({ field, value, onChange }) => {
  return (
    <div>
      <label>
        {field.label}:
        <textarea
          value={value}
          placeholder={field.placeholder || ""}
          onChange={(e) => onChange(field.id, e.target.value)}
        />
      </label>
    </div>
  );
};

export default TextAreaField;