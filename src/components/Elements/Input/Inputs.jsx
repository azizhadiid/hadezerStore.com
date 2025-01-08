const Input = (props) => {
    const {
        tipe,
        placeholder,
        name,
        id
    } = props;
    return (<
        input type={
            tipe
        }
        className="border border-solid border-slate-800 rounded w-full py-2 px-3 text-black"
        placeholder={
            placeholder
        }
        name={
            name
        }
        id={
            id
        }
    />
    );
};

export default Input;