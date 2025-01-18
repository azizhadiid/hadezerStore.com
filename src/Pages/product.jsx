import NavbarUser from "../components/Fragments/NavbarUser";
import Footer from "../components/Fragments/Footer";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <NavbarUser></NavbarUser>
            <Footer klass="mt-2 bg-gray-800"></Footer>
        </>
    );
};

export default ProductPage;