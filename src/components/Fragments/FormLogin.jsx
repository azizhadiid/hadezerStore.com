import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/button";
import { useEffect, useRef, useState } from "react";
import { login, getUserId } from "../../services/auth.service";

const FormLogin = (props) => {
    const { action } = props;
    const [loginFailed, setLoginFailed] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);

                // Decode token untuk mendapatkan ID user
                const userId = getUserId(res);
                localStorage.setItem("userId", userId);

                // Redirect ke beranda
                window.location.href = "/beranda";
            } else {
                // Tangani error dengan aman
                const errorMessage = res?.response?.data?.message || "Login failed. Please try again.";
                setLoginFailed(errorMessage);
                console.error("Login error:", errorMessage);
            }
        });
    };


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