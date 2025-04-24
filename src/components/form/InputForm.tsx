import { Input } from "antd";
import { Controller } from "react-hook-form";
import { TInputFormProps } from "../../types";

const InputForm = ({ type, name, label }: TInputFormProps) => {
  //   const { register } = useFormContext();
  return (
    <div style={{ marginBottom: "10px" }}>
      {label ? label : null}
      <Controller
        render={({ field }) => <Input {...field} type={type} id={name} />}
        name={name}
      />
    </div>
  );
};

export default InputForm;
