import type { NextPage } from "next";
import React from "react";
import Lesson from "../components/lesson";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <li>
        <Link href="/lessons/lesson1">Lesson 1</Link>
      </li>
    </div>
  );
};

export default Home;
