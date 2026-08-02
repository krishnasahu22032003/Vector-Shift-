const TextField = ({ field, value, onChange }) => {
  return (
    <div>
      <label>
        {field.label}:
        <input
          type="text"
          value={value}
          placeholder={field.placeholder || ""}
          onChange={(e) => onChange(field.id, e.target.value)}
        />
      </label>
    </div>
  );
};

export default TextField;