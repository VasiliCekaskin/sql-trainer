import type { NextPage } from "next";
import LessonTemplate from "../../../components/lessonTemplate/lessonTemplate";
import type { LessonConfig } from "../../../components/lessonTemplate/types";

const config: LessonConfig = {
  lessonNr: 1,
  description:
    "Zur Erfassung und Verwalten von Veranstaltungen wurde folgende Datenstruktur erstellt.",
  taskDescription:
    "Erstellen Sie eine SQL-Anweisung, mit der alle ID's der Veranstaltungen mit der Location 'Duesseldorf' absteigend sortiert nach Datum ausgegeben werden.",
};

const Lesson: NextPage = () => {
  return LessonTemplate(config);
};

export default Lesson;
