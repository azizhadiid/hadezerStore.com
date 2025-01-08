const AuthLayout = (props) => {
    const { children, title, subtitle } = props;
    return (
        <div className="flex justify-center min-h-screen items-center ">
            <div className="w-full max-w-xs border rounded-xl p-5 shadow-xl">
                <h1 className="text-blue-600 text-3xl font-bold mb-2 text-center">{title}</h1>
                <p className="font-medium text-slate-500 mb-8 text-center">{subtitle}</p>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;