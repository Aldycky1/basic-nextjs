import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout>
      {/* tidak akan pernah ter apply krn tidak diimport*/}
      <p className="title-homepage">Blog Page</p>
    </Layout>
  );
}
