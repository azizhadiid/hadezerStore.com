import { Link } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import ilustrasi1 from "./img/6505894.jpg";
import ilustrasi2 from "./img/32553172.png";
import CardService from "../components/Fragments/CardService";
import TestimonialCard from "../components/Fragments/TestimonialCard";

const HomePage = () => {
  const testimonials = [
    {
      image:
        "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "kylekatarnls",
      job: "CTO TokoPedia",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit temporibus quod ab ad, necessitatibus at iste consequatur explicabo earum!",
      stars: 5,
    },
    // Tambahkan 4 testimonial lainnya
    {
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "johndoe",
      job: "React.js Framework",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit temporibus quod ab ad, necessitatibus at iste consequatur explicabo earum!",
      stars: 4,
    },
    {
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "janedoe",
      job: "Vue.js Framework",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit temporibus quod ab ad, necessitatibus at iste consequatur explicabo earum!",
      stars: 5,
    },
    {
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "michael",
      job: "Laravel Framework",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit temporibus quod ab ad, necessitatibus at iste consequatur explicabo earum!",
      stars: 5,
    },
    {
      image:
        "https://images.pexels.com/photos/1040895/pexels-photo-1040895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "sarah",
      job: "Django Framework",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit temporibus quod ab ad, necessitatibus at iste consequatur explicabo earum!",
      stars: 4,
    },
  ];

  return (
    <div className="bg-gray-800">
      <Navbar id="service"></Navbar>
      {/* Section 1 */}
      <section className="bg-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 mt-16">
          <div className="text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 font-poppins">
              SPECIAL SALE.
            </h1>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-4 font-poppins">
              HadezerStore
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6 font-poppins">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eveniet molestias atque in quasi magnam illo ducimus tempore. Ut obcaecati ab ipsam necessitatibus doloribus. Omnis hic debitis atque incidunt sint.
            </p>
            <Link
              to="#"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-poppins font-semibold"
            >
              Lihat Lebih
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src={ilustrasi1}
              alt="Ilustrasi 1"
              className="w-3/4 lg:w-full max-w-lg"
            />
          </div>
        </div>
      </section >

      {/* Section 2 */}
      <section section className="bg-gray-100 py-10" >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
          {/* Div untuk Gambar */}
          <div className="flex justify-center mb-6 lg:mb-0">
            <img
              src={ilustrasi2}
              alt="Ilustrasi 2"
              className="w-full max-w-md "
            />
          </div>
          {/* Div untuk Teks */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Banyak Barang-barang Pilihan yang Menarik
            </h1>
            <p className="text-gray-500 leading-relaxed font-poppins" id="service">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illum tempore recusandae
              culpa sequi laborum quas amet non minima autem voluptate ad alias porro cumque ut magni,
              obcaecati vel necessitatibus!
            </p>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section section className="bg-gray-50 py-10" >
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Product</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {/* Card 1: Baju */}
          <CardService title="baju" explain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat harum repellendus tenetur quis error.">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-8 w-8 text-white transition-all">
              <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z" fill="currentColor" />
            </svg>
          </CardService>

          {/* Card 2: Celana */}
          <CardService title="Topi" explain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat harum repellendus tenetur quis error." klass="bg-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-8 w-8 text-white transition-all"><path d="M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z" fill="currentColor" /></svg>
          </CardService>

          {/* Card 3: Tas */}
          <CardService title="Tas" explain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat harum repellendus tenetur quis error." klass="bg-lime-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 text-white transition-all"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="currentColor" /></svg>
          </CardService>

          {/* Card 4: Benda */}
          <CardService title="Tas" explain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat harum repellendus tenetur quis error." klass="bg-rose-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-8 w-8 text-white transition-all"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" fill="currentColor" /></svg>
          </CardService>
        </div>
      </section>

      {/* Section 4 */}
      <section section className="bg-gray-100 py-10" >
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Testimonials</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
      <Footer klass="mt-2 bg-gray-800"></Footer>
    </div >
  );
};

export default HomePage;
