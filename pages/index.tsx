import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import lessonOne from "../public/images/lesson_1.png";
import { createDB } from "../src/createDB";
import { Database, QueryResults } from "sql-wasm";
import dynamic from "next/dynamic";
const Editor = dynamic(import("../components/editor"), {
  ssr: false,
  loading: () => <div>loading</div>,
});

const Home: NextPage = () => {
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
        setDB(
          await createDB(
            "CREATE TABLE Adressen(nr integer primary key, name varchar, strasse varchar, hausnr integer, plz varchar, ort varchar); \
INSERT INTO Adressen(name, strasse, hausnr, plz, ort) VALUES ('Peter', 'westtangente', 12, '40480', 'Ratingen'), ('Günther', 'Düsseldorferstrasse', 21, '40472', 'Düsseldorf');"
          )
        );
      })();
    }
  });

  return (
    <div className="grid grid-cols-2">
      <div className="overflow-y-scroll h-full">
        <div className="m-6">
          <h1 className="font-bold text-xl text-gray-600 block">Aufgabe 1</h1>
          <p className="mt-1">
            Sie sind Mitarbeiter der Hurensohn AG und Co GmbH. Gegeben ist
            folgende Datenbank. Mach mal bisschen SQL
          </p>
          <Image
            className="w-1/2"
            src={lessonOne}
            alt="lesson 1 database"
          ></Image>

          <p className="mt-1">
            Erstelle eine SQL Anweisung die die Namen aller Adressen ausgibt.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl text-gray-600 block mt-10">
            Beispiel Ausgabe
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
        <div className="m-6 mr-0">
          <h1 className="font-bold text-xl text-gray-600 block">SQL Editor</h1>

          <Editor value={currentQuery} setValue={setCurrentQuery} />

          <button className="mt-10 w-full border-4" onClick={runStatement}>
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

export default Home;
