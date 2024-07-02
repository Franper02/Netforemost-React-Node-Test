# Frontend

La parte de front end decidi realizarla usando graphql y preparando las queries necesarias para obtener la informacion requerida para mostrar en la pagina web.

Debido a la configuración necesaria de graphql, hay varios archivos extras:

- `codegen.yml`: Configuración para la generación automatica de queries, tipados y fragmentos.
- `fetch-schema.yml`: Se encarga de buscar la información del esquema definido por el backend y detallarlo todo en un .json.
- `introspection.json`: Estructura del esquema definido en el backend.

Ademas se agregaron dos scripts para facilitar la generación de los archivos necesarios:

- `npm run build-types`: Genera los archivos necesarios para la comunicación con el backend.
- `npm run fetch-schema`: Descarga el esquema del backend y lo guarda en un archivo .json, ademas genera los archivos necesarios para la comunicación con el backend.

Dentro de la carpeta `src/graphql-generated` se encuentran todos los archivos generados por graphql codegen y un archivo `makeQuery.ts`

- `makeQuery.ts`: Establece unas configuraciónes necesarias para la generación de queries, graphql va a utilizar esta funcion como base para todas las queries en lugar de la que viene por defecto con apollo.

Luego solo hay algunos archivos basicos, la mayoria de los componentes se encuentra en la carpeta `src/modules` y se dividen en `components` y `views`.

- `components`: Contiene los componentes que se utilizan en las vistas.
- `views`: Contiene las vistas de la pagina web.

Para los estilos se utilizó `Tailwind.css` y `Framer-motion` para las animaciones.

Muchas gracias! 🚀
