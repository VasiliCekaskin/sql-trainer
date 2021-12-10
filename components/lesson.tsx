import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createDB } from "../src/createDB";
import { Database, QueryResults } from "sql-wasm";
import dynamic from "next/dynamic";
import type { LessonConfig } from "../src/lessons/types";

const Editor = dynamic(import("../components/editor"), {
  ssr: false,
  loading: () => <div>loading</div>,
});

const Lesson = (config: LessonConfig) => {
  const [DB, setDB] = useState<Database>();
  const [lastSuccessMessage, setLastSuccessMessage] = useState("");
  const [lastErrorMessage, setLastErrorMessage] = useState("");
  const [lastResults, setLastResults] = useState<QueryResults[]>();
  const [currentQuery, setCurrentQuery] = useState("");

  const runStatement = async () => {
    setLastErrorMessage("");
    setLastSuccessMessage("");
    try {
      if (currentQuery) {
        const res = DB?.exec(currentQuery);

        console.log(res);

        setLastSuccessMessage(`${currentQuery} successful`);
        setLastResults(res);
      }
    } catch (error) {
      setLastSuccessMessage("");
      error && setLastErrorMessage(String(error));
    }
  };

  useEffect(() => {
    if (!DB) {
      (async () => {
        const db = await createDB(config.dbPath);

        setDB(db);
      })();
    }
  });

  return (
    <div className="grid grid-cols-2">
      <div className="overflow-y-scroll h-full">
        <div className="m-6">
          <h1 className="font-bold text-xl text-gray-600 block">
            Aufgabe {config.lessonNr}
          </h1>
          <p className="mt-1">{config.description}</p>
          <Image
            src={config.imagePath}
            width={1000}
            height={400}
            alt={`lesson ${config.lessonNr} database structure`}
          ></Image>

          <p className="mt-1">{config.taskDescription}</p>
        </div>

        <div>
          <h2 className="font-bold ml-6 text-xl text-gray-600 block mt-10">
            Beispiel Lösung
          </h2>

          <div className="mt-6 flex justify-center">
            <table className="table-auto border-4">
              <thead>
                <tr>
                  <th className="border-2 p-2">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2 p-2">
                  <td className="border-2 p-1">Berliner Allee 3</td>
                </tr>
                <tr className="border-2 p-2">
                  <td className="border-2 p-1">Eine dumme Straße</td>
                </tr>

                <tr className="border-2 p-2">
                  <td className="border-2 p-1">Eine schlaue Straße</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll h-full">
        <div className="m-6">
          <h1 className="font-bold text-xl text-gray-600 block">SQL Editor</h1>

          <Editor value={currentQuery} setValue={setCurrentQuery} />

          <button className="mt-2 border-2 w-full" onClick={runStatement}>
            Run SQL
          </button>

          <div>
            <h2 className="font-bold text-xl text-green-600 block mt-10">
              {lastSuccessMessage}
            </h2>
            <h2 className="font-bold text-xl text-red-600 block mt-10">
              {lastErrorMessage}
            </h2>
            <h2 className="font-bold text-xl text-gray-600 block mt-10">
              Deine Ausgabe
            </h2>

            <div className="mt-6 flex justify-center">
              <table className="table-auto border-4">
                <thead>
                  <tr>
                    {lastResults &&
                      lastResults.at(-1)?.columns.map((column) => (
                        <th key={column} className="border-2 p-2">
                          {column}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {lastResults &&
                    lastResults.at(-1)?.values.map((valuesArray) => (
                      <tr key={valuesArray.toString()} className="border-2 p-2">
                        {valuesArray.map((value) => (
                          <td key={value} className="border-2 p-1">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
