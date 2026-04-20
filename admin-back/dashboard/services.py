from django.db import connection

def get_dashboard_data():
    with connection.cursor() as cursor:
        # Llamamos al nuevo procedimiento único
        cursor.callproc('sp_get_dashboard_full')
        
        # 1. Obtenemos el primer set de resultados (Los Totales)
        columns_totals = [col[0] for col in cursor.description]
        totals_row = cursor.fetchone()
        data = dict(zip(columns_totals, totals_row))
        
        # 2. Saltamos al segundo set de resultados (La Actividad Reciente)
        if cursor.nextset():
            columns_act = [col[0] for col in cursor.description]
            recent_rows = cursor.fetchall()
            data['recent_activity'] = [dict(zip(columns_act, row)) for row in recent_rows]
        else:
            data['recent_activity'] = []

        return data