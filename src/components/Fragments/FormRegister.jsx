import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/button";

const RegisterForm = (props) => {
    const { action } = props;
    return (
        <form action={action}>
            {/* Username */}
            <InputForm title="Username" type="text" placeholder="jhon Doe" name="username" />
            {/* Email */}
            <InputForm title="Email" type="email" placeholder="example@gmail.com" name="email" />
            {/* Password */}
            <InputForm title="Password" type="password" placeholder="********" name="password" />
            {/* Confirm PAssword */}
            <InputForm title="Confirm Password" type="password" placeholder="********" name="confirmpassword" />
            <Button klass="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default RegisterForm;