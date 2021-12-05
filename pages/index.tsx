import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import lessonOne from "../public/images/lesson_1.png";

const Editor = dynamic(import("../components/editor"), { ssr: false });

const Home: NextPage = () => {
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
              <th className="border-2 p-2">Name</th>
              <tr className="border-2 p-2">
                <td className="border-2 p-1">Berliner Allee 3</td>
              </tr>
              <tr className="border-2 p-2">
                <td className="border-2 p-1">Eine dumme Straße</td>
              </tr>

              <tr className="border-2 p-2">
                <td className="border-2 p-1">Eine schlaue Straße</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll h-full">
        <div className="m-6 mr-0">
          <h1 className="font-bold text-xl text-gray-600 block">SQL Editor</h1>
          <Editor name="SqlEditor" />

          <button className="mt-10 w-full border-4">Run SQL</button>

          <div>
            <h2 className="font-bold text-xl text-gray-600 block mt-10">
              Deine Ausgabe
            </h2>

            <div className="mt-6 flex justify-center">
              <table className="table-auto border-4">
                <th className="border-2 p-2">Name</th>
                <tr className="border-2 p-2">
                  <td className="border-2 p-1">Berliner Allee 3</td>
                </tr>
                <tr className="border-2 p-2">
                  <td className="border-2 p-1">Eine dumme Straße</td>
                </tr>

                <tr className="border-2 p-2">
                  <td className="border-2 p-1">Eine schlaue Straße</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
