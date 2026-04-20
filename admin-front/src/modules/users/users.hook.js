import { useEffect, useState } from "react";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from "../../api/users.api";

export const useUsers = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await getUsers();
        setData(res.data); // Axios → data
    };

    useEffect(() => {
        fetchData();
    }, []);

    const save = async (form, selected) => {
        if (selected) {
        await updateUser(selected.id, form);
        } else {
        await createUser(form);
        }
        fetchData();
    };

    const remove = async (id) => {
        await deleteUser(id);
        fetchData();
    };

    return {
        data,
        save,
        remove,
    };
};