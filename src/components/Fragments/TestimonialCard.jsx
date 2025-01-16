const TestimonialCard = ({ image, name, job, review, stars }) => {
    return (
        <div className="rounded-lg bg-[#111111] p-6 w-full">
            <div className="flex items-center">
                <img
                    alt={name}
                    src={image}
                    className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4 text-sm text-[#F3EEFF]">
                    <p className="font-semibold">{name}</p>
                    <p>
                        {job}

                    </p>
                    {/* Stars Section */}
                    <div className="mt-2 flex">
                        {Array.from({ length: stars }).map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-yellow-500"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-4 text-sm text-[#B1B7E9]">{review}</p>
        </div>
    );
};

export default TestimonialCard;
