import createSqlWasm from "sql-wasm";

export const createDB = async () => {
  const sql = await createSqlWasm({
    wasmUrl: new URL(
      "../node_modules/sql-wasm/dist/sqlite3.wasm",
      import.meta.url
    ).toString(),
  });

  const db = new sql.Database();

  return db;
};
