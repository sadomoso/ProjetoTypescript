import { TextField, FormControl } from "@mui/material";

const style = {
  root: {
    background: "with",
    color: " black",
  },
};
interface IInput {
  type: string;
  label?: string;
  name: string;
  text?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export default function Input({
  type,
  name,
  text,
  placeholder,
  value,
  onChange,
  onClick,
  label,
}: IInput) {
  return (
    <FormControl color="primary" margin="normal" size="small" fullWidth>
      <label htmlFor={name}>{text}</label>
      <TextField
        sx={{ backgroundColor: "white" }}
        variant="filled"
        color="primary"
        margin="normal"
        required
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onClick={onClick}
        label={label}
      ></TextField>
    </FormControl>
  );
}
