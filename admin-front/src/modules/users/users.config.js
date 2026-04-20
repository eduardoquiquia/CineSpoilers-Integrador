export const usersConfig = {
    title: "Gestión de Usuarios",
    entityName: "usuario",
    entityNamePlural: "usuarios",

    fields: [
        { name: "name", label: "Nombre" },
        { name: "email", label: "Email" },
        { name: "gender", label: "Género" },
        { name: "role", label: "Rol" },
        { name: "state", label: "Estado" },
        // { name: "created_at", label: "Fecha Registro" },
    ],

    formFields: [
        { name: "name", label: "Nombre" },
        { name: "email", label: "Email" },
        {
            name: "gender",
            label: "Género",
            type: "select",
            options: [
                { value: "M", label: "Masculino" },
                { value: "F", label: "Femenino" },
            ],
        },
        {
            name: "role",
            label: "Rol",
            type: "select",
            options: [
                { value: "ADMIN", label: "Administrador" },
                { value: "CLIENTE", label: "Cliente" },
            ],
        },
        {
            name: "state",
            label: "Estado",
            type: "select",
            options: [
                { value: "ACTIVO", label: "Activo" },
                { value: "INACTIVO", label: "Inactivo" },
            ],
        },
        { name: "birth_date", label: "Fecha de nacimiento", type: "date" },
    ],
};