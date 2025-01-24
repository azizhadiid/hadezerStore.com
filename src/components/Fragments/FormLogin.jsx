import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = (props) => {
    const { action } = props;
    const [loginFailed, setLoginFailed] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem('username', event.target.username.value);
        // localStorage.setItem('password', event.target.password.value);
        // window.location.href = "/";
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };
        // Mengecek data login di database
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                window.location.href = "/beranda";
            } else {
                setLoginFailed(res.response.data);
                console.log(res.response.data);
            }
        });
    }

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form action={action} onSubmit={handleLogin}>
            {/* Email */}
            <InputForm title="Username" type="text" placeholder="Jhon Doe" name="username" id="username" ref={usernameRef} />
            {/* Password */}
            <InputForm title="Password" type="password" placeholder="********" name="password" />
            <Button klass="bg-blue-600 w-full" type="submit" >Login</Button>
            {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    );
};

export default FormLogin;