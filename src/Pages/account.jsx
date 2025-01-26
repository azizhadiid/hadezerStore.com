import { useEffect, useState } from "react";
import Footer from "../components/Fragments/Footer";
import NavbarUser from "../components/Fragments/NavbarUser";
import axios from "axios";
import { useLogin } from "../hooks/useLogin";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    // Session Login
    const username = useLogin();

    useEffect(() => {
        // Ambil ID user dari localStorage
        const userId = localStorage.getItem("userId");

        if (userId) {
            // Fetch data user berdasarkan ID
            axios.get(`https://fakestoreapi.com/users/${userId}`).then((res) => {
                setUserData(res.data);
            }).catch((err) => {
                console.error("Error fetching user data:", err);
            });
        }
    }, []);


    return (
        <div className="">
            <NavbarUser></NavbarUser>
            {!userData ? (
                <div>Loading...</div>
            ) : (
                <div className="bg-white">
                    <div className="bg-white overflow-hidden shadow rounded-lg border mt-32 container mx-auto mb-16 max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="px-4 py-5">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Contact Details
                                </h3>
                            </div>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                The contact information is provided below.
                            </p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userData.name.firstname} {userData.name.lastname}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userData.email}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                    <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userData.phone}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                    <dt className="text-sm font-medium text-gray-500">City</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userData.address.city}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userData.address.city}, {userData.address.street}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            )}
            <Footer klass="mt-2 bg-gray-800"></Footer>
        </div>
    );
};

export default Profile;
