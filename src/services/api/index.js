const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    products: {
        products: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
        product: (id) => `${API}/products/${id}`,
    },
    user: {
        users: `${API}/users`,
        usersIsAvailable: `${API}/users/is-available`,
    },
    auth: {
        login: `${API}/auth/login`,
        profile: `${API}/auth/profile`,
    },
    categories: {
        categories: (limit, offset) => `${API}/categories?limit=${limit}&offset=${offset}`,
        category: (id) => `${API}/categories/${id}`,
        categoryListProducts: (id) => `${API}/categories/${id}/products`,
    },
    files: {
        upload: `${API}/files/upload`,
        filnema: (filename) =>  `${API}/files/upload/${filename}`,
    }
};

export default endPoints;