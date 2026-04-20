export const moviesConfig = {
    title: "Gestión de Películas",
    entityName: "película",
    entityNamePlural: "películas",
    imageField: "image_url",

    fields: [
        { name: "title", label: "Titulo" },
        { name: "description", label: "Descripción" },
        { name: "release_date", label: "Fecha de Estreno", type: "date" },
        // { name: "state", label: "Estado" },
        // { name: "created_at", label: "Fecha Registro" },
    ],

    formFields: [
        { name: "title", label: "Titulo" },
        { name: "description", label: "Descripción" },
        { name: "release_date", label: "Fecha de Estreno" },
        { name: "image_url", label: "URL de la Imagen", type: "url"},
        // { name: "state", label: "Estado" },
    ],
};