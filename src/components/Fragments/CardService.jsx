const CardService = (props) => {
    const { children, title, explain, klass = 'bg-sky-500' } = props;
    return (
        <div
            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className={`absolute top-10 z-0 h-20 w-20 rounded-full ${klass} transition-all duration-300 group-hover:scale-[10]`}></span>
            <div className="relative z-10 mx-auto max-w-md">
                <span className={`grid h-20 w-20 place-items-center rounded-full ${klass} transition-all duration-300 group-hover:${klass}`}>
                    {children}
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <h2 className="mt-2 text-lg font-bold text-gray-800 group-hover:text-white">{title}</h2>
                    <p className="-mt-6">{explain}</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                        <a href="/product" className="text-sky-500 transition-all duration-300 group-hover:text-white">Lihat Detail
                            &rarr;
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardService;