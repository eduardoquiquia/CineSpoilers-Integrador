import React, { useState } from "react";
import { Pencil, Trash2, Plus, Search, LayoutGrid, List } from "lucide-react";
import DynamicCardList from "./DynamicCardList";

const DynamicModule = ({
    config,
    data,
    onCreate,
    onEdit,
    onDelete,
    view = "table", // "table" o "cards"
    renderItem,     // Función para renderizar la card personalizada
}) => {
    const [search, setSearch] = useState("");

    // Lógica de filtrado global
    const filteredData = data.filter((item) =>
        Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="bg-bg-soft p-6 rounded-xl shadow-lg border border-border-soft">
            
            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-text-main tracking-tight">
                        {config.title}
                    </h2>
                </div>

                <button 
                    onClick={onCreate} 
                    className="flex items-center gap-2 bg-primary hover:bg-primary-soft text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-primary/20"
                >
                    <Plus size={18} />
                    <span>New {config.entityName}</span>
                </button>
            </div>

            {/* BARRA DE HERRAMIENTAS (BUSCADOR) */}
            <div className="relative mb-8 flex gap-4">
                <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-soft">
                        <Search size={18} />
                    </span>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={`Buscar en ${config.entityNamePlural}...`}
                        className="w-full bg-bg-main text-text-main border border-border-soft rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-text-soft/40"
                    />
                </div>
            </div>

            {/* CONTENIDO DINÁMICO */}
            {view === "cards" ? (
                <DynamicCardList
                    data={filteredData} // 👈 CLAVE para búsqueda
                    config={config}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ) : (
                /* VISTA EN TABLA */
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border-soft text-text-soft uppercase text-xs tracking-wider">
                                {config.fields.map((f) => (
                                    <th key={f.name} className="px-4 py-3 font-semibold">
                                        {f.label}
                                    </th>
                                ))}
                                <th className="px-4 py-3 font-semibold text-right">Acciones</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-border-soft/50">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr 
                                        key={item.id} 
                                        className="hover:bg-bg-hover transition-colors group"
                                    >
                                        {config.fields.map((f) => (
                                            <td key={f.name} className="px-4 py-4 text-text-main text-sm">
                                                {f.renderAs === "image" ? (
                                                    <img 
                                                        src={item[f.name]} 
                                                        alt="preview" 
                                                        className="w-10 h-14 object-cover rounded shadow-md border border-border-soft"
                                                    />
                                                ) : (
                                                    item[f.name]
                                                )}
                                            </td>
                                        ))}

                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => onEdit(item)}
                                                    className="p-2 text-text-soft hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                                                    title="Editar"
                                                >
                                                    <Pencil size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => onDelete(item.id)}
                                                    className="p-2 text-text-soft hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                                    title="Eliminar"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={config.fields.length + 1} className="text-center py-10 text-text-soft italic">
                                        No se encontraron resultados para "{search}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default DynamicModule;