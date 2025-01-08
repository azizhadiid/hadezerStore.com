// Membuat Button component dengan arrow function
const Button = (props) => {
    // Membuat distructuring
    const { children, klass = 'bg-black' } = props;
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${klass} text-white`} type="submit">
            {children}
        </button>
    )
}

export default Button;