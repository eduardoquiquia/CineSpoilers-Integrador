import React, { useState } from "react";
import { Plus } from "lucide-react"; // Importamos el icono para el botón
import DynamicModule from "../../components/DynamicModule";
import FormModal from "../../components/FormModal";
import { moviesConfig } from "./movies.config";
import { useMovies } from "./movies.hook";

const MoviesPage = () => {
    const { data, save, remove } = useMovies();

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <div className="space-y-6">
            <DynamicModule
                config={moviesConfig}
                data={data}
                view="cards"
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

            {/* MODAL DE FORMULARIO */}
            <FormModal
                isOpen={open}
                onClose={() => setOpen(false)}
                fields={moviesConfig.formFields}
                initialData={selected}
                onSubmit={(form) => {
                    save(form, selected);
                    setOpen(false);
                }}
            />
        </div>
    );
};

export default MoviesPage;