import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";
import { Employee } from "../models/Employee";

const APIBASEURL = 'http://localhost:3000/'
const Home: NextPage = () => {
  const [isDisplayModal, setDisplayModal] = useState(false);
  const { isLoading, error, data } = useQuery('employeesData', ():Promise<Employee[]> => fetch(APIBASEURL + 'employees').then(res => res.json()))
  if (error) {
    return <h1>Error</h1>
  }
  return (
    <Layout>
      <Header setDisplayModal={(isDisplay: boolean) => setDisplayModal(isDisplay)} />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {isLoading && <h1>Loading ...</h1>}
      {!isLoading && <Table data={data!}/>}
      <Modal isDisplay={isDisplayModal} setDisplay={(isDisplay: boolean) => setDisplayModal(isDisplay)} />
    </Layout>
  );
};

export default Home;
