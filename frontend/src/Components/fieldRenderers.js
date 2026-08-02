import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import TextAreaField from "./fields/TextAreaField";

export const fieldRenderers = {
  text: TextField,
  select: SelectField,
  textarea: TextAreaField,
};