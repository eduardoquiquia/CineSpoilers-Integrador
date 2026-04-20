export const productsConfig = {
    title: "Gestión de Productos",
    entityName: "producto",
    entityNamePlural: "productos",

    imageField: "image_url",

    fields: [
        { name: "name", label: "Nombre" },
        { name: "description", label: "Descripción" },
        { name: "price", label: "Precio" },
        { name: "category",label: "Categoría" },
        { name: "stock", label: "Stock" },
        { name: "state", label: "Estado" },
        // { name: "created_at", label: "Fecha Registro" },
        // { name: "updated_at", label: "Fecha Actualización" },
    ],

    formFields: [
        { name: "name", label: "Nombre" },
        { name: "description", label: "Descripción" },
        { name: "price", label: "Precio" },
        { 
            name: "category", 
            label: "Categoría", 
            type: "select", 
            options: [
                { value: 'COMBOS', label: 'Combos' },
                { value: 'CANCHITA', label: 'Canchita' },
                { value: 'BEBIDAS', label: 'Bebidas' },
                { value: 'SNACKS', label: 'Snacks' },
                { value: 'COLECCIONABLES', label: 'Coleccionables' },
            ] 
        },
        { name: "stock", label: "Stock" },
        { 
            name: "state", 
            label: "Estado", 
            type: "select", 
            options: [
                { value: 'DISPONIBLE', label: 'Disponible' },
                { value: 'AGOTADO', label: 'Agotado' },
                { value: 'OCULTO', label: 'Oculto' },
            ] 
        },
        { name: "image_url", label: "URL de la Imagen", type: "url"},
    ],
};