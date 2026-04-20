import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const DynamicCardList = ({ data, config, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="
                        bg-bg-card 
                        rounded-xl 
                        p-5 
                        border border-border-soft/50
                        hover:bg-bg-hover 
                        hover:border-border-soft
                        transition-all 
                        duration-300
                        group
                        relative
                        shadow-sm
                        flex flex-col
                    "
                >
                    {/* IMAGEN - Manteniendo tu formato original */}
                    {config.imageField && item[config.imageField] && (
                        <div className="relative overflow-hidden rounded-lg mb-5 aspect-[2/3]">
                            <img
                                src={item[config.imageField]}
                                alt="img"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    )}

                    {/* CAMPOS - Con mayor separación y tamaño de letra */}
                    <div className="flex flex-col gap-4 flex-1"> 
                        {config.fields.map((f, index) => (
                            <div key={f.name}>
                                {index === 0 ? (
                                    /* Título más grande y con más peso */
                                    <h3 className="text-text-main font-extrabold text-xl truncate leading-snug">
                                        {item[f.name]}
                                    </h3>
                                ) : (
                                    /* Labels y valores con más aire entre ellos */
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-text-soft text-[11px] uppercase tracking-widest font-bold opacity-80">
                                            {f.label}
                                        </span>
                                        <p className="text-text-main text-base font-medium line-clamp-2 leading-relaxed">
                                            {item[f.name]}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* ACCIONES */}
                    <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border-soft/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onEdit(item);
                            }}
                            className="p-2.5 rounded-lg bg-bg-main text-text-soft hover:text-primary hover:bg-primary/10 transition-all border border-border-soft/20"
                            title="Editar"
                        >
                            <Pencil size={20} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(item.id);
                            }}
                            className="p-2.5 rounded-lg bg-bg-main text-text-soft hover:text-red-500 hover:bg-red-500/10 transition-all border border-border-soft/20"
                            title="Eliminar"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DynamicCardList;