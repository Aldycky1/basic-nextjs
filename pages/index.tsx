import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      {/* styles using module css */}
      <h1 className={styles["title-homepage"]}>Welcome Aldy</h1>
      <Footer />
    </>
  );
};

export default Home;
