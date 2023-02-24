import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";
import { APIBASEURL } from "../constants/url";
import { Employee } from "../models/Employee";
import fetcher from "../utils/fetcher"

const Home: NextPage = () => {
  const [isDisplayModal, setDisplayModal] = useState(false);
  const { isLoading, error, data } = useQuery('employeesData', (): Promise<Employee[]> => fetch(APIBASEURL + 'employees').then(res => res.json()))
  const queryClient = useQueryClient()
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number>(-1);
  const deleteEmployee = useMutation((id: number) => {
    return fetcher(APIBASEURL + 'employees' + `/${id}`, {
      method: 'DELETE',
    })
  }, {
    onSuccess: () => queryClient.invalidateQueries("employeesData")
  })
  if (error) {
    return <h1>Error</h1>
  }

  const editEmployee = (id: number) => {
    setSelectedEmployeeId(id)
    setDisplayModal(true)
  }

  const createEmployee = () => {
    setSelectedEmployeeId(-1)
    setDisplayModal(true)
  }

  return (
    <>
      {!isLoading && <Modal selectedEmployeeId={selectedEmployeeId} employees={data!} isDisplay={isDisplayModal} setDisplay={(isDisplay: boolean) => setDisplayModal(isDisplay)} />}
      <Layout>
        <Header createEmployee={createEmployee} />
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {isLoading && <h1>Loading ...</h1>}
        {!isLoading && <Table editEmployeeById={editEmployee} deleteEmployee={(id) => deleteEmployee.mutate(id)} data={data!} />}
      </Layout>
    </>
  );
};

export default Home;
