import type { LessonConfig } from "../types";

const config: LessonConfig = {
  lessonNr: 1,
  imagePath: "/assets/images/lesson1.png",
  description:
    "Zur Erfassung und Verwalten von Veranstaltungen wurde folgende Datenstruktur erstellt.",
  taskDescription:
    "Erstellen Sie eine SQL-Anweisung, mit der alle ID's der Veranstaltungen mit der Location 'Duesseldorf' absteigend sortiert nach Datum ausgegeben werden.",
  dbPath: "/assets/databases/lesson1.sqlite",
};

export default config;
