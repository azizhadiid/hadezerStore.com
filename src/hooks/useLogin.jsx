import { useState, useEffect } from "react";

export const useLogin = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/login";
        }
    }, []);

    return username;
};