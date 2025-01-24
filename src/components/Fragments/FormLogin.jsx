import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/button";

const FormLogin = (props) => {
    const { action } = props;
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('username', event.target.username.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = "/";
    }

    return (
        <form action={action} onSubmit={handleLogin}>
            {/* Email */}
            <InputForm title="Username" type="text" placeholder="Jhond Doe" name="username" id="username" />
            {/* Password */}
            <InputForm title="Password" type="password" placeholder="********" name="password" />
            <Button klass="bg-blue-600 w-full" type="submit" >Login</Button>
        </form>
    );
};

export default FormLogin;