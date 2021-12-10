import createSqlWasm from "sql-wasm";

export const createDB = async (dbPath: string) => {
  const sql = await createSqlWasm({
    wasmUrl: new URL(
      "../node_modules/sql-wasm/dist/sqlite3.wasm",
      import.meta.url
    ).toString(),
  });

  const dataPromise = await fetch(dbPath).then((res) => res.arrayBuffer());

  const db = new sql.Database(new Uint8Array(dataPromise));

  return db;
};
