const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    products: {
        getproducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/products`,
        getproduct: (id) => `${API}/products/${id}`,
        updateProducts: (id) => `${API}/products/${id}`,
        deleteProducts: (id) => `${API}/products/${id}`,
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