# Guía de Instalación: Tailwind CSS v4 en React (Vite)

### 1. Instalación de Dependencias
Primero, estableció Tailwind CSS, PostCSS y el motor Autoprefixer.
~~~
npm install tailwindcss @tailwindcss/postcss postcss autoprefixer
~~~

### 2. Configuración de PostCSS
Tailwind v4 requiere el nuevo plugin de PostCSS para procesar las directivas. Crea o edita el archivo postcss.config.js en la raíz del proyecto:
~~~
// postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    "autoprefixer": {},
  },
}
~~~

### 3. Configuración del Entry Point de CSS
En Tailwind v4, ya no usamos las antiguas directivas @tailwind base;. Ahora importamos todo el framework con una sola línea.

Limpia tu archivo src/index.css (o el CSS principal) y añade:
~~~
/* src/index.css */
@import "tailwindcss";
~~~

### 4. Importación del CSS en React
Asegúrate de que el archivo CSS esté siendo importado en el punto de entrada de tu aplicación (normalmente main.jsx o index.js):
~~~
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // <--- Línea vital
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
~~~

### 5. Verificación de Funcionamiento
Para confirmar que la instalación es correcta, añade una clase de Tailwind a cualquier componente de React:
~~~
function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <h1 className="text-4xl font-extrabold text-sky-400 drop-shadow-lg">
        ¡CineSpoilers con Tailwind v4!
      </h1>
    </div>
  )
}
~~~
