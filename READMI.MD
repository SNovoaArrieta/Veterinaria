# 🐾 Gestión Asíncrona de una Veterinaria

Este proyecto es una aplicación interactiva desarrollada en **JavaScript** para la gestión de mascotas y sus dueños en una veterinaria. Está diseñada para ejecutarse completamente en el navegador sin usar frameworks, librerías externas ni almacenamiento persistente (todo funciona en memoria).

## 🎯 Objetivo

Aplicar conceptos fundamentales de **asincronía** en JavaScript (`setTimeout`, callbacks, Promesas, async/await) mediante una interfaz de texto basada en `prompt`, `alert` y `console.log`.

---

## 🧩 Funcionalidades

1. Registrar un nuevo dueño (con validación asincrónica por callback)
2. Registrar una nueva mascota (validación asincrónica del dueño existente)
3. Listar todas las mascotas registradas
4. Buscar una mascota por nombre (Promesa con retardo simulado)
5. Actualizar el estado de salud de una mascota (async/await)
6. Eliminar una mascota por nombre (Promesa con confirmación)
7. Ver todas las mascotas de un dueño por cédula (async/await)
8. Salir del programa

---

## 🛠️ Tecnologías usadas

- HTML5
- JavaScript 
- Console API (alert, prompt, console.log)

---

## ⚙️ Cómo ejecutar el proyecto

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador (doble clic o Live Server).
3. Interactúa con el programa desde los cuadros de diálogo (`prompt`) y revisa la consola para la salida detallada (`console.log`).

---

## 🔄 Asincronía implementada

| Funcionalidad                     | Técnica usada                 | Simulación de retardo |
|----------------------------------|-------------------------------|------------------------|
| Registro de dueño                | `setTimeout` + callback       | 1.5 segundos           |
| Registro de mascota              | `setTimeout` + callback       | 2 segundos             |
| Búsqueda de mascota              | `Promise` + `setTimeout`      | 1.5 segundos           |
| Actualizar estado de salud       | `async/await` + `setTimeout`  | 1 segundo              |
| Eliminación de mascota           | `Promise` + `setTimeout`      | 2 segundos             |
| Ver mascotas de un dueño         | `async/await` + `setTimeout`  | 2 segundos             |


---

## 👩‍💻 Autora

Sofía Novoa Arrieta  

