import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header/>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Table />
    </Layout>
  );
};

export default Home;
