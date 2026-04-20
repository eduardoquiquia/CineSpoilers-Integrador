import React, { useState } from "react";
import { Plus } from "lucide-react"; // Importamos el icono Plus
import DynamicModule from "../../components/DynamicModule";
import FormModal from "../../components/FormModal";
import { productsConfig } from "./products.config";
import { useProducts } from "./products.hook";

const ProductsPage = () => {
    const { data, save, remove } = useProducts();

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <div className="space-y-6">
            <DynamicModule
                config={productsConfig}
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
                fields={productsConfig.formFields}
                initialData={selected}
                onSubmit={(form) => {
                    save(form, selected);
                    setOpen(false);
                }}
            />
        </div>
    );
};

export default ProductsPage;