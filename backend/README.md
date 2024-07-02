# Backend

El backend fue desarrollado usando Express, Mongoose y Apollo Server. Se decidió utilizar GraphQL para la comunicación con el frontend, ya que permite obtener la información necesaria de una manera más eficiente y flexible.

La estructura del proyecto es la siguiente:

- `src`: Contiene todo el código fuente del proyecto.
  - `config`: Configuración del servidor (solo contiene la configuración de CORS).
  - `graphql`: Definición del esquema y resolvers de GraphQL.
  - `models`: Definición de los modelos de Mongoose.
  - `server.js`: Punto de entrada del servidor.

La información fue cargada a la base de datos utilizando la interfaz web de Mongodb Atlas.

Para correr el proyecto se deben seguir los siguientes pasos:

1. Instalar las dependencias:

```bash
npm install
```

2. Crear un archivo `.env` en la raíz del proyecto con la información que le envie a Elsy

3. Correr el servidor:

```bash
node src/server.js
```

Muchas gracias! 🚀
