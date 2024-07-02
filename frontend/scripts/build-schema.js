import { writeFile } from "fs";
import { buildClientSchema, printSchema } from "graphql";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const schema = require("../introspection.json");

const clientSchema = buildClientSchema(schema);
const schemaString = printSchema(clientSchema);

writeFile("schema.graphql", schemaString, (err) => {
  if (err) {
    throw err;
  }
  console.log("🚀 Schema from instrospection built successfully\n");
});
