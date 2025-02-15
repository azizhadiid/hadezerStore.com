const CardProduct = (props) => {
    const { description, title, image, price, rating, category, onAddToCart, id } = props;
    return (
        <div className="relative m-4 w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
            {/* Gambar */}
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href={`/product/${id}`}>
                <img
                    className="object-cover w-full"
                    src={image}
                    alt="product image"
                />
            </a>

            {/* Konten */}
            <div className="mt-4 px-5 pb-5 flex flex-col justify-between h-[300px]">
                {/* Kategori */}
                <p className="mb-1 text-sm text-gray-500 uppercase">Category: {category}</p>

                {/* Judul */}
                <a href={`/product/${id}`}>
                    <h5 className="text-lg font-semibold text-gray-800">
                        {title.substring(0, 20)}...
                    </h5>
                </a>

                {/* Deskripsi */}
                <p className="mt-2 text-sm text-gray-600 min-h-24">
                    {description.substring(0, 100)} ...
                </p>

                {/* Harga dan Rating */}
                <div className="mt-4 mb-5 flex items-center justify-between">
                    {/* Harga */}
                    <p>
                        <span className="text-2xl font-bold text-gray-900">{price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</span>
                    </p>

                    {/* Rating */}
                    <div className="flex items-center">
                        {[...Array(Math.round(rating || 0))].map((_, idx) => (
                            <svg
                                key={idx}
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        ))}
                        <span className="ml-2 rounded bg-yellow-100 px-2 py-0.5 text-xs font-semibold">
                            {rating || 0}/5
                        </span>
                    </div>
                </div>

                {/* Tombol */}
                <button
                    onClick={() => onAddToCart(id)}
                    href="id"
                    className="flex items-center justify-center w-full rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default CardProduct;
