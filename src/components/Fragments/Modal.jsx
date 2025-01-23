import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, onCartUpdate }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Ambil data dari localStorage
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCart);
    }, [isOpen]); // Refresh setiap kali modal dibuka

    useEffect(() => {
        if (cartItems.length > 0) {
            const sum = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
            setTotalPrice(sum);
        } else {
            setTotalPrice(0); // Jika keranjang kosong, totalPrice adalah 0
        }
    }, [cartItems]);

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id); // Hapus item berdasarkan ID
        setCartItems(updatedCart); // Perbarui state
        localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Perbarui localStorage
        onCartUpdate(updatedCart); // Panggil callback untuk memperbarui `cart` di ProductPage

        // Panggil callback untuk memperbarui cart di parent
        if (onCartUpdate) {
            onCartUpdate(updatedCart);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
            onClick={onClose}
        >
            <div
                className="relative top-20 mx-auto shadow-xl rounded-md bg-white max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-700">Cart Items</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-900"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className="p-4">
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between py-2 border-b"
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-12 h-12 object-cover rounded mr-4"
                                        />
                                        <div>
                                            <h4 className="font-medium text-gray-800">{item.title.substring(0, 25)}</h4>
                                            <p className="text-sm text-gray-500">
                                                {item.price.toLocaleString("id-ID", {
                                                    style: "currency",
                                                    currency: "USD",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600 text-sm mr-4">Qty: {item.qty}</span>
                                        <button
                                            onClick={() => handleRemoveItem(item.id)} // Panggil fungsi untuk menghapus item
                                            className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded-md font-bold font-poppins"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                <div className="flex justify-between items-center p-4 border-t">
                    <h4 className="text-lg font-semibold text-gray-700">Total Price:</h4>
                    <p className="text-lg font-bold text-gray-800">
                        {totalPrice.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </p>
                </div>

                <div className="flex justify-end p-4 border-t">
                    <button
                        onClick={onClose}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
