import { Link } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Footer klass="mt-2 bg-gray-800"></Footer>
    </>
  );
};

export default HomePage;
