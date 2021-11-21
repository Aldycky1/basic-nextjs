import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout pageTitle="Blog Page">
      {/* tidak akan pernah ter apply krn tidak diimport*/}
      <p className="title-homepage">Blog Page</p>
    </Layout>
  );
}
