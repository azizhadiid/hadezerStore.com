import { forwardRef } from "react";
import Input from "./Inputs";
import Label from "./Labels";

const InputForm = forwardRef((props, ref) => {
    const { title, name, type, placeholder } = props;
    return (
        <div className="mb-6">
            <Label idFor={name}>{title}</Label>
            <Input name={name} tipe={type} placeholder={placeholder} id={name} ref={ref} />
        </div>
    );
});

export default InputForm;