import createSqlWasm from "sql-wasm";

export const createDB = async (initStatement: string) => {
  const sql = await createSqlWasm({
    wasmUrl: new URL(
      "../node_modules/sql-wasm/dist/sqlite3.wasm",
      import.meta.url
    ).toString(),
  });

  const db = new sql.Database();

  console.log(db.exec(initStatement));

  return db;
};
