const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    products: {
        getAllProducts: `${API}/products`,
        getProducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/products`,
        getProduct: (id) => `${API}/products/${id}`,
        updateProduct: (id) => `${API}/products/${id}`,
        deleteProduct: (id) => `${API}/products/${id}`,
    },
    user: {
        getUsers: (limit) => `${API}/users?limit=${limit}`,
        addUsers: `${API}/users`,
        usersIsAvailable: `${API}/users/is-available`,
    },
    auth: {
        login: `${API}/auth/login`,
        profile: `${API}/auth/profile`,
    },
    categories: {
        getCategoriesList: (limit) => `${API}/categories?limit=${limit}`,
        addCategory: `${API}/categories`,
        getCategoryInfo: (id) => `${API}/categories/${id}`,
        updateCategoryInfo: (id) => `${API}/categories/${id}`,
        getCategoryListProducts: (id) => `${API}/categories/${id}/products`,
    },
    files: {
        addImage: `${API}/files/upload`,        
    },
};

export default endPoints;