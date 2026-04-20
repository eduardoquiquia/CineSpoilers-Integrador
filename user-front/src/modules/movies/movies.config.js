export const moviesConfig = {
    // Configuración de Navegación
    routes: {
        home: "/",
        detail: "/movie/:id",
    },

    // Metadata de la Entidad (Para que el Hook o la UI sepan qué campos usar)
    entity: {
        titleField: "title",
        descriptionField: "description",
        imageField: "imageUrl", // OJO: Verifica si Spring devuelve imageUrl o image_url
    },

    // Constantes de Interfaz
    categories: ["Acción", "Comedia", "Drama", "Terror", "Animación"],
    
    // Estilos específicos de Cineplanet para este módulo
    styles: {
        primaryColor: "text-cp-blue-dark",
        accentColor: "bg-cp-blue-light",
    }
};