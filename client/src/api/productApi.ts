import axiosClient from "./axiosClient";

class ProductApi {
    getAll = (params: any) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    }
}


const productApi = new ProductApi();
export default productApi;