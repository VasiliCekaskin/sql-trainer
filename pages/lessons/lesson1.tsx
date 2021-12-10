import type { NextPage } from "next";
import Lesson from "../../components/lesson";
import config from "../../src/lessons/lesson1/config";

const Home: NextPage = () => {
  return Lesson(config);
};

export default Home;
