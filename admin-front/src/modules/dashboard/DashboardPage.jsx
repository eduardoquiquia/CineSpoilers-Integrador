import React from "react";
import { useDashboard } from "./dashboard.hook";
import DashboardCard from "../../components/DashboardCard";

const DashboardPage = () => {
    const { data, loading } = useDashboard();

    if (loading) return <p>Cargando...</p>;
    
    if (!data) {
        return <p>Error al cargar datos</p>;
    }

    return (
        <div className="space-y-8">

            <h1 className="text-2xl font-bold">Dashboard</h1>

            {/* GRID DE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <DashboardCard
                    title="Usuarios Totales"
                    value={data.users_total}
                />

                <DashboardCard
                    title="Películas"
                    value={data.movies_total}
                />

                <DashboardCard
                    title="Productos"
                    value={data.products_total}
                />

                <DashboardCard
                    title="Usuarios este mes"
                    value={data.users_month}
                />

                <DashboardCard
                    title="Películas este mes"
                    value={data.movies_month}
                />

            </div>

            <div>
                <h2 className="text-lg font-semibold text-text-main mb-4">
                    Actividad Reciente
                </h2>

                <div className="space-y-3">
                    {data.recent_activity.map((item, i) => (
                        <div
                            key={i}
                            className="bg-bgCard p-4 rounded-xl border border-borderSoft"
                        >
                            <p className="text-white text-sm font-medium">
                                {item.action}
                            </p>
                            <p className="text-textSoft text-xs">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;