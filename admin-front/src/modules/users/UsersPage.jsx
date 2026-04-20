import React, { useState } from "react";
import DynamicModule from "../../components/DynamicModule";
import FormModal from "../../components/FormModal";
import { usersConfig } from "./users.config";
import { useUsers } from "./users.hook";

const UsersPage = () => {
    const { data, save, remove } = useUsers();

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <>
        <DynamicModule
            config={usersConfig}
            data={data}
            onCreate={() => {
            setSelected(null);
            setOpen(true);
            }}
            onEdit={(item) => {
            setSelected(item);
            setOpen(true);
            }}
            onDelete={remove}
        />

        <FormModal
            isOpen={open}
            onClose={() => setOpen(false)}
            fields={usersConfig.formFields}
            initialData={selected}
            onSubmit={(form) => {
            save(form, selected);
            setOpen(false);
            }}
        />
        </>
    );
};

export default UsersPage;