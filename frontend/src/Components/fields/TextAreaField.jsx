import { useRef } from "react";
import "./TextAreaField.css";

const TextAreaField = ({ field, value, onChange }) => {
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const textarea = textareaRef.current;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    onChange(field.id, e.target.value);
  };

  return (
    <div className="node-field">
      <label>{field.label}</label>

      <textarea
        ref={textareaRef}
        value={value}
        placeholder={field.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextAreaField;