import { useRouteError } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayouts";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <AuthLayout title="Oops... !" subtitle="Sorry, an unexpected error has occured">
            <div className="text-center font-bold text-slate-700">
                {error.statusText || error.message}
            </div>
        </AuthLayout>
    );
};

export default ErrorPage;