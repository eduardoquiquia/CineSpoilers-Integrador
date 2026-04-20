import { useEffect, useState } from "react";
import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../../api/products.api";

export const useProducts = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await getProducts();
        setData(res.data); // Axios → data
    };

    useEffect(() => {
        fetchData();
    }, []);

    const save = async (form, selected) => {
        if (selected) {
        await updateProduct(selected.id, form);
        } else {
        await createProduct(form);
        }
        fetchData();
    };

    const remove = async (id) => {
        await deleteProduct(id);
        fetchData();
    };

    return {
        data,
        save,
        remove,
    };
};