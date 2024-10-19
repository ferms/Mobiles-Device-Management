# Mobile Device Management

Este proyecto consiste en una aplicación de gestión de dispositivos móviles que incluye un frontend desarrollado en React y un backend en Node.js con Express. A continuación se presenta una guía para ejecutar ambos proyectos y cómo correr las pruebas.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 20.12.0)
- [Docker](https://www.docker.com/products/docker-desktop) (opcional, para ejecutar en contenedores)
- [Docker Compose](https://docs.docker.com/compose/) (opcional, para ejecutar ambos servicios)



## Ejecutar el Proyecto

## Opción 1: Ejecutar Localmente sin Docker

### Frontend

1. **Navega al directorio del frontend:**

   ``bash
   cd frontend

2. **Instala las dependencias:** 

``bash
npm install

3. **Ejecuta la aplicación:** 

``bash
npm start

### Backend

1. **Navega al directorio del Backend:**

   ``bash
   cd backend

2. **Instala las dependencias:** 

``bash
npm install


3. **Ejecuta la aplicación:** 

``bash
npm run dev

### Opción 2: Usando Docker y Docker Compose

1. Abre una terminal y navega al directorio del proyecto.

2. Ejecuta el siguiente comando para construir y levantar ambos servicios:

   ```bash
   docker-compose up --build


## Ejecutar  las pruebas 

### Frontend

1. **Navega al directorio del frontend:**

   ``bash
   cd frontend

2. **Ejecuta las pruebas:** 

``bash
npm test


### Backend

1. **Navega al directorio del Backend:**

   ``bash
   cd backend


2. **Ejecuta las pruebas:** 

``bash
npm test



## Notas
Asegúrate de que el backend esté corriendo antes de acceder al frontend para evitar problemas de conexión.
