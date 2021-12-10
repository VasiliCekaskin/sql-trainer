import type { NextPage } from "next";
import Lesson from "../../components/lesson";

const Home: NextPage = () => {
  return Lesson(
    1,
    "Es gibt eine Datenbank",
    "Erstelle ein Query zum durchziehen du waist",
    "CREATE TABLE Adressen(nr integer primary key, name varchar, \
			 strasse varchar, hausnr integer, plz varchar, ort varchar); \
			 INSERT INTO Adressen(name, strasse, hausnr, plz, ort) VALUES \
			 ('Adresse1', 'westtangente', 12, '40480', 'Ratingen'),\
			 ('Adresse2', 'Düsseldorferstrasse', 21, '40472', 'Düsseldorf'), \
			 ('Adresse3', 'Eineanderestrase', 13337, '40480', 'Münster'); \
			 CREATE TABLE Artikel(artnr integer primary key, artname varchar, preis double, mwst double); \
			 INSERT INTO Artikel(artname, preis, mwst) values ('PC', 999, 19), ('Tisch', 12, 19), ('Fernseher', 89, 19), ('Stuhl', 59, 19); \
			 CREATE TABLE Kaeufe(kaufnr integer primary key, nr integer, artnr integer, stueck integer, datum date, foreign key(nr) references Adressen(nr), foreign key(artnr) references Artikel(artnr)); \
			 INSERT INTO Kaeufe(nr, artnr, stueck, datum) values (1, 1, 3, '2020-01-01'), (1, 2, 6, '2020-12-12'), (2, 1, 9, '2021-01-01');"
  );
};

export default Home;
