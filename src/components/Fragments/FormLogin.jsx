import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/button";

const FormLogin = (props) => {
    const { action } = props;
    return (
        <form action={action}>
            {/* Email */}
            <InputForm title="Email" type="text" placeholder="Jhond Doe" name="username" id="username" />
            {/* Password */}
            <InputForm title="Password" type="password" placeholder="********" name="password" />
            <Button klass="bg-blue-600 w-full">Login</Button>
        </form>
    );
};

export default FormLogin;