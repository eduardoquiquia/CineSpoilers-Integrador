# Crear Proyecto Django-rest-framework

## Creación de carpeta de trabajo
~~~
mkdir mi_proyecto

cd mi_proyecto
~~~

## Crear entorno virtual
~~~
python -m venv .venv
~~~

## Activar entorno virtual
~~~
.venv\Scripts\actívate
~~~

## Instalar django en el proyecto
~~~
pip install django
~~~

## Instalar django rest framework 
~~~
pip install djangorestframework
~~~
##### Agregar modulo instalado a settings: 'rest_framework',

## Instalar django cors headers
~~~
pip install django-cors-headers
~~~
##### - Agregar modulo instalado a settings: 'corsheaders',
##### - En midleware agregar: 'corsheaders.middleware.CorsMiddleware',
##### - Al final de settings agregar: CORS_ALLOWED_ORIGINS = []

## Crear proyecto
~~~
django-admin startproject config .
~~~

## Ejecutar proyecto
~~~
python manage.py runserver
~~~

## Crear aplicación en el proyecto
~~~
python manage.py startapp mi_app
~~~
#### Registrar aplicación en settings.py

