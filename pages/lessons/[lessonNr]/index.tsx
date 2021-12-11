import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import * as Lessons from "../../../src/lessons/index";

const Index: NextPage = () => {
  const router = useRouter();
  const { lessonNr } = router.query;

  switch (lessonNr) {
    case "1":
      return <div>{lessonNr === "1" && <Lessons.Lesson1 />}</div>;
    default:
      return null;
  }
};

export default Index;
