import type { NextPage } from "next";
import React from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <li>
        <Link href="/lessons/1">Lesson 1</Link>
      </li>
    </div>
  );
};

export default Home;
