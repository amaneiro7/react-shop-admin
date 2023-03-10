import { useState } from "react";

const useAlert = (options) => {
    const defaultOptions = {
        active: false,
        messege: "",
        type: "",
        autoClose: true,
    };
    const [alert, setAlert] = useState({
        ...defaultOptions,
        ...options,
    });
    const toggleAlert = () => {
        setAlert(!alert.active)
    };

    return {
        alert,
        setAlert,
        toggleAlert,
    };
};

export default useAlert;