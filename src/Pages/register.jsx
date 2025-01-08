import AuthLayout from "../components/Layouts/AuthLayouts"
import RegisterForm from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" subtitle="Please, Make Your Own Account">
            <RegisterForm />
            <p className="text-sm mt-5 text-center">Have an account? <Link to="/login" className="font-bold text-blue-600">Sign In</Link></p>
        </AuthLayout>
    );
};

export default RegisterPage;