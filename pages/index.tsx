import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* styles using module css */}
      <h1 className={styles["title-homepage"]}>Welcome Aldy</h1>
    </Layout>
  );
};

export default Home;
