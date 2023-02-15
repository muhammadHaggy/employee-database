import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header></Header>
    </Layout>
  );
};

export default Home;
