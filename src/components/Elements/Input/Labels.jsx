const Label = (props) => {
    const { idFor, children } = props;
    return (
        <label className="block text-slate-700 text-sm font-bold mb-2" for={idFor}> {children}</label >
    );
};

export default Label;