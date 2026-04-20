import React, { useState, useEffect } from "react";
import { X, Calendar } from "lucide-react";

const FormModal = ({ isOpen, onClose, fields, onSubmit, initialData }) => {
    const [form, setForm] = useState({});

    useEffect(() => {
        setForm(initialData || {});
    }, [initialData]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-bg-soft border border-border-soft rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* HEADER */}
                <div className="flex justify-between items-center p-6 border-b border-border-soft/50">
                    <h3 className="text-xl font-bold text-text-main tracking-tight">
                        {initialData ? "Editar Registro" : "Nuevo Registro"}
                    </h3>
                    <button 
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-bg-hover text-text-soft transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* FORMULARIO */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar space-y-5">
                        {fields.map((f) => {
                            // DETECCIÓN DINÁMICA DE FECHA
                            // Si el tipo es 'date' O el nombre del campo contiene 'date' o 'fecha'
                            const isDateField = f.type === "date" || 
                                               f.name.toLowerCase().includes("date") || 
                                               f.name.toLowerCase().includes("fecha");

                            return (
                                <div key={f.name} className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-text-soft uppercase tracking-wider ml-1">
                                        {f.label}
                                    </label>

                                    {f.type === "select" ? (
                                        <select
                                            name={f.name}
                                            value={form[f.name] || ""}
                                            onChange={handleChange}
                                            className="bg-bg-main border border-border-soft text-text-main p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
                                        >
                                            <option value="">Seleccionar...</option>
                                            {f.options?.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    ) : isDateField ? (
                                        /* INPUT DE FECHA CON ICONO */
                                        <div className="relative group">
                                            <input
                                                type="date"
                                                name={f.name}
                                                value={form[f.name] || ""}
                                                onChange={handleChange}
                                                className="w-full bg-bg-main border border-border-soft text-text-main p-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all [color-scheme:dark] cursor-text"
                                            />
                                            <Calendar 
                                                size={18} 
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft group-focus-within:text-primary transition-colors pointer-events-none" 
                                            />
                                        </div>
                                    ) : f.name === "description" || f.type === "textarea" ? (
                                        <textarea
                                            name={f.name}
                                            rows={4}
                                            value={form[f.name] || ""}
                                            onChange={handleChange}
                                            className="bg-bg-main border border-border-soft text-text-main p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm leading-relaxed"
                                        />
                                    ) : (
                                        <input
                                            type={f.type || "text"}
                                            name={f.name}
                                            value={form[f.name] || ""}
                                            onChange={handleChange}
                                            className="bg-bg-main border border-border-soft text-text-main p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* BOTONES */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-border-soft/50">
                        <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-full text-text-soft font-semibold hover:bg-bg-hover transition-colors">
                            Cancelar
                        </button>
                        <button type="submit" className="px-8 py-2.5 rounded-full bg-primary hover:bg-primary-soft text-white font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
                            {initialData ? "Guardar Cambios" : "Crear Ahora"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormModal;