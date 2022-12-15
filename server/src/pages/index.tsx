import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    window.location.href = "https://uniflix-eight.vercel.app/";
  }, []);

  return <></>;
};

export default Home;
