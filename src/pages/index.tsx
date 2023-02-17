import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Home: NextPage = () => {
  const [isDisplayModal, setDisplayModal] = useState(true);
  return (
    <Layout>
      <Header/>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Table />
      <Modal isDisplay={isDisplayModal} setDisplay={(isDisplay: boolean) => setDisplayModal(isDisplay)}/>
    </Layout>
  );
};

export default Home;
