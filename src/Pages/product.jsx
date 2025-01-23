import NavbarUser from "../components/Fragments/NavbarUser";
import Footer from "../components/Fragments/Footer";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import CardProduct from "../components/Fragments/CardProduct";
import Modal from "../components/Fragments/Modal";

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const [cart, setCart] = useState([]);
  // UseEffect utk simpan ke localStroge
  useEffect(() => {
    setCart([]);
  }, []);

  // Sync cart with localStorage on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Jika produk sudah ada, tambahkan qty
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Jika produk belum ada, tambahkan produk baru
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };


  return (
    <div className="bg-gray-800">
      <NavbarUser></NavbarUser>
      <section id="testimonies" className="py-20 bg-white">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="mb-3 mt-4 flex justify-end">
            <button
              className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded flex items-center"
              onClick={openModal}
            >
              {/* Ikon keranjang */}
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

              {/* Badge jumlah item */}
              <span className="absolute bg-blue-500 text-blue-100 px-2 py-1 text-xs font-bold rounded-full -top-2 -right-2">
                {cart.length}
              </span>
            </button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} onCartUpdate={(updatedCart) => setCart(updatedCart)} />
          </div>
          <hr className="border-gray-300 mb-4" />
        </div>
        <div className="container mx-auto px-5 py-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:ml-1 xl:ml-10 lg:ml-16">
            {products.length > 0 && products.map((product) => (
              <CardProduct key={product.id} title={product.title} image={product.image} price={product.price} rating={product.rating.rate} category={product.category} description={product.description} onAddToCart={() =>
                handleAddToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                })
              } id={product.id}>
              </CardProduct>
            ))}
          </div>
        </div>
      </section>
      <Footer klass="mt-2 bg-gray-800"></Footer>
    </div>
  );
};

export default ProductPage;