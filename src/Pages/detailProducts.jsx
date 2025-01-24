import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import NavbarUser from "../components/Fragments/NavbarUser";
import Footer from "../components/Fragments/Footer";

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data);
        });
    }, [id]);
    console.log(product);
    return (
        <div className="bg-gray-800">
            <NavbarUser></NavbarUser>
            {Object.keys(product).length > 0 && (
                <div className="bg-gray-100 dark:bg-gray-800 py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
                        <div className="flex flex-col md:flex-row -mx-4">
                            {/* Product Image Section */}
                            <div className="md:flex-1 px-4">
                                <div className="h-[460px] mb-4">
                                    <img
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                        src={product.image}
                                        alt="Product"
                                    />
                                </div>
                                <div className="-mx-2 mb-4">
                                    <div className="w-1/2 px-2 justify-self-center">
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                            Buy Product
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Details Section */}
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {product.description}
                                </p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                        <span className="text-gray-600 dark:text-gray-300">${product.price}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Rating:
                                    </span>
                                    <div className="flex items-center">
                                        <div className="flex items-center mt-2 mr-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    className={`${star <= product.rating.rate
                                                        ? "text-yellow-500"
                                                        : "text-gray-400"
                                                        } text-xl mr-2 hover:text-yellow-600`}
                                                    aria-label={`Rating ${star}`}
                                                >
                                                    ★
                                                </button>
                                            ))}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-3">
                                            Review: {product.rating.rate}/5 ({product.rating.count} reviews)
                                        </div>
                                    </div>
                                </div>

                                {/* Select Size */}
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                    <div className="flex items-center mt-2">
                                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                                            <button
                                                key={size}
                                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.category}</p>
                                </div>

                                {/* Product Description */}
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Back to page before */}
                                <div className="mt-4 flex justify-end">
                                    <button
                                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
                                        onClick={() => window.history.back()}
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer klass="mt-2 bg-gray-800"></Footer>
        </div>
    );
};

export default DetailPage;